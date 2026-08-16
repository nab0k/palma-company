# frozen_string_literal: true

require "digest"
require "json"
require "open3"
require "pathname"

module PalmaBookDashboard
  VERSION = "1.1.0"

  Unit = Struct.new(:canonical_id, :part, :number, :title, :path, keyword_init: true)

  class TableOfContents
    attr_reader :root, :path

    def initialize(root, path: nil)
      @root = Pathname.new(root).expand_path
      @path = Pathname.new(path || @root.join("manuscript/README.md")).expand_path
    end

    def load
      part = nil
      units = []

      path.read(encoding: "UTF-8").each_line do |line|
        if (heading = line.match(/^##\s+(.+?)\s*$/))
          part = normalize_part(heading[1])
          next
        end

        entry = line.match(/^(?:\d+\.|-)\s+`([^`]+)`(?:\s+—\s+(.+?))?\s*$/)
        next unless entry

        relative = entry[1]
        next if relative == "00-front-matter.md" || relative == "bibliography.md"

        unit = build_unit(part, relative, entry[2])
        units << unit if unit
      end

      units
    end

    private

    def build_unit(part, relative, explicit_title)
      number =
        if relative == "01-introduction.md"
          0
        elsif relative == "99-conclusion.md"
          99
        else
          File.basename(relative)[/\A(\d{2})-/, 1]&.to_i
        end
      return nil unless number

      manuscript_path = "manuscript/#{relative}"
      title = explicit_title || title_from_file(manuscript_path, number)
      Unit.new(
        canonical_id: "CHAPTER_#{format('%02d', number)}",
        part: part || fallback_part(number),
        number: display_number(number),
        title: title,
        path: manuscript_path
      )
    end

    def title_from_file(relative, number)
      full_path = root.join(relative)
      heading = full_path.read(encoding: "UTF-8").each_line.find { |line| line.match?(/^#\s+/) }
      return "unknown" unless heading

      title = heading.sub(/^#\s+/, "").strip
      title.sub(/\A(?:Chapter\s+#{number}|Introduction|Conclusion)\s*[:—-]\s*/i, "")
    end

    def normalize_part(value)
      return "Introduction" if value == "Front matter"
      return "Conclusion" if value == "Conclusion"

      value
    end

    def fallback_part(number)
      case number
      when 0 then "Introduction"
      when 1..5 then "Part I — The Problem"
      when 6..10 then "Part II — The Theory"
      when 11..16 then "Part III — The Practice"
      when 17..21 then "Part IV — The Palma Method"
      else "Conclusion"
      end
    end

    def display_number(number)
      return "Introduction" if number.zero?
      return "Conclusion" if number == 99

      number.to_s
    end
  end

  class GitDates
    def initialize(root)
      @root = Pathname.new(root).expand_path
    end

    def load
      repository_root = @root.parent
      prefix = "#{@root.basename}/"
      stdout, _stderr, status = Open3.capture3(
        "git", "-C", repository_root.to_s, "log", "--format=@@%cs", "--name-only", "--",
        "#{prefix}manuscript", "#{prefix}research/chapter-packets"
      )
      return {} unless status.success?

      current_date = nil
      dates = {}
      stdout.each_line do |line|
        value = line.strip
        if value.start_with?("@@")
          current_date = value.delete_prefix("@@")
        elsif !value.empty? && current_date && value.start_with?(prefix)
          relative = value.delete_prefix(prefix)
          dates[relative] ||= current_date
        end
      end
      dates
    end
  end

  class Builder
    ACCEPTED_STATUSES = %w[accepted approved editorially_accepted locked published].freeze
    REVISION_STATUSES = %w[revision under_revision changes_requested].freeze

    attr_reader :units, :index, :last_modified

    def initialize(units:, index:, last_modified: {})
      @units = units
      @index = index
      @last_modified = last_modified
    end

    def data
      rows = units.map { |unit| build_row(unit) }
      packet_count = rows.count { |row| row["research_packet_status"] != "missing" }
      {
        "generator_version" => VERSION,
        "dashboard_fingerprint" => dashboard_fingerprint,
        "summary" => {
          "total_manuscript_units" => rows.length,
          "working_packets" => packet_count,
          "editorially_accepted" => rows.count { |row| ACCEPTED_STATUSES.include?(row["editorial_status"]) },
          "under_revision" => rows.count { |row| REVISION_STATUSES.include?(row["editorial_status"]) },
          "not_started" => rows.count do |row|
            row["research_packet_status"] == "missing" && %w[missing unknown].include?(row["draft_status"])
          end,
          "current_records" => index.dig("summary", "current") || 0,
          "legacy_records" => index.dig("summary", "legacy") || 0,
          "ambiguous_records" => index.dig("summary", "ambiguous") || 0,
          "packet_coverage_percentage" => rows.empty? ? 0.0 : ((packet_count * 100.0) / rows.length).round(1)
        },
        "rows" => rows,
        "ambiguities" => ambiguity_rows,
        "unresolved_manuscript_relationships" => unresolved_manuscript_relationships
      }
    end

    def render
      dashboard = data
      summary = dashboard["summary"]
      lines = [
        "# The Palma Method — Book Dashboard",
        "",
        "> Generated by `scripts/generate_book_dashboard.rb`. Do not edit by hand.",
        "",
        "- Canonical table of contents: `manuscript/README.md`",
        "- Repository index: `generated/repository-index.json`",
        "- Dashboard fingerprint: `#{dashboard['dashboard_fingerprint']}`",
        "- Metadata mode: `legacy_warning`",
        "- Editorial meaning of `accepted`: current working version accepted for continued manuscript development; not final publication copy.",
        "",
        "## Summary",
        "",
        "| Metric | Count |",
        "|---|---:|",
        "| Total manuscript units | #{summary['total_manuscript_units']} |",
        "| Working packets | #{summary['working_packets']} |",
        "| Editorially accepted | #{summary['editorially_accepted']} |",
        "| Under revision | #{summary['under_revision']} |",
        "| Not started | #{summary['not_started']} |",
        "| Current records | #{summary['current_records']} |",
        "| Legacy records | #{summary['legacy_records']} |",
        "| Ambiguous records | #{summary['ambiguous_records']} |",
        "| Packet coverage | #{format('%.1f', summary['packet_coverage_percentage'])}% |",
        "",
        "## Manuscript units",
        "",
        "| Part | No. | Title | Current working chapter | Repository | Research packet | Accepted working version | Legacy versions | Ambiguous files | Draft | Editorial | Next action | Last modified |",
        "|---|---:|---|---|---|---|---|---|---|---|---|---|---|"
      ]

      dashboard["rows"].each do |row|
        lines << [
          row["part"], row["number"], row["title"], row["current_working_chapter"],
          row["repository_status"], row["research_packet_status"], row["accepted_working_version"],
          row["legacy_versions"], row["ambiguous_files"], row["draft_status"],
          row["editorial_status"], row["next_action"], row["last_modified"]
        ].map { |value| escape_table(value) }.join(" | ").then { |body| "| #{body} |" }
      end

      lines.concat([
        "",
        "## Ambiguity report",
        "",
        "Only chapter groups whose repository-index selection is `ambiguous` appear here.",
        ""
      ])

      if dashboard["ambiguities"].empty?
        lines << "No ambiguous chapter groups."
      else
        dashboard["ambiguities"].each do |item|
          lines.concat([
            "### #{item['canonical_id']} — #{item['title']}",
            "",
            "- Reason: #{item['reason']}",
            "- Smallest manual action: #{item['action']}",
            "- Competing files:"
          ])
          item["files"].each do |file|
            lines << "  - `#{file['path']}` — version: `#{file['version']}`; index state: `#{file['index_state']}`"
          end
          lines << ""
        end
      end

      lines.concat([
        "",
        "## Unresolved manuscript-to-packet relationships",
        "",
        "These unversioned manuscript files remain traceable but are not promoted over a versioned current packet.",
        ""
      ])
      if dashboard["unresolved_manuscript_relationships"].empty?
        lines << "No unresolved manuscript-to-packet relationships."
      else
        dashboard["unresolved_manuscript_relationships"].each do |item|
          lines << "- `#{item['canonical_id']}`: `#{item['manuscript_path']}` remains ambiguous relative to `#{item['current_packet_path']}` (v#{item['current_version']}); smallest action: record explicit manuscript-to-packet lineage metadata."
        end
      end

      lines.join("\n").rstrip + "\n"
    end

    private

    def build_row(unit)
      group = chapter_groups[unit.canonical_id]
      records = group ? group.fetch("records", []) : []
      packet_records = records.select { |record| packet?(record) }
      manuscript_record = records.find { |record| record["path"] == unit.path }
      current_record = records.find { |record| record["index_state"] == "current" }
      repository_status = repository_status(group, records)
      packet_status = packet_status(group, packet_records)
      draft_status = explicit_status(manuscript_record)
      draft_status = "missing" unless manuscript_record
      editorial_status = editorial_status(group, current_record, manuscript_record)
      accepted_working_version = accepted_working_version(current_record)
      legacy_versions = packet_records.select { |record| record["index_state"] == "legacy" }
                                      .sort_by { |record| semantic_version(record["version"]) || [] }
                                      .map { |record| "v#{record['version']} — `#{record['path']}`" }
      ambiguous_files = records.select { |record| record["index_state"] == "ambiguous" }
                               .sort_by { |record| record["path"] }
                               .map { |record| "`#{record['path']}`" }

      {
        "canonical_id" => unit.canonical_id,
        "part" => unit.part,
        "number" => unit.number,
        "title" => unit.title,
        "path" => unit.path,
        "current_version" => current_record&.dig("version") || "unknown",
        "current_working_chapter" => current_record ? "v#{current_record['version']} — `#{current_record['path']}`" : "unknown",
        "repository_status" => repository_status,
        "research_packet_status" => packet_status,
        "accepted_working_version" => accepted_working_version,
        "legacy_versions" => legacy_versions.empty? ? "none" : legacy_versions.join("; "),
        "ambiguous_files" => ambiguous_files.empty? ? "none" : ambiguous_files.join("; "),
        "draft_status" => draft_status,
        "editorial_status" => editorial_status,
        "next_action" => next_action(repository_status, packet_status, draft_status, editorial_status, current_record),
        "last_modified" => latest_date(([unit.path] + records.map { |record| record["path"] }).compact)
      }
    end

    def repository_status(group, records)
      return "missing" unless group

      state = group["selection_state"].to_s
      return state if %w[current legacy ambiguous].include?(state)
      return "legacy" if !records.empty? && records.all? { |record| record["record_state"] == "legacy" }

      "ambiguous"
    end

    def packet_status(group, packet_records)
      return "missing" if packet_records.empty?

      current = packet_records.find { |record| record["index_state"] == "current" }
      return explicit_status(current) if current
      return "ambiguous" if group && group["selection_state"] == "ambiguous"

      status = explicit_status(packet_records.max_by { |record| semantic_version(record["version"]) || [] })
      status == "unknown" ? "legacy" : "legacy: #{status}"
    end

    def editorial_status(group, current_record, manuscript_record)
      return "needs editorial classification" unless group
      return "needs editorial classification" if group["selection_state"] == "ambiguous"

      statuses = [current_record, manuscript_record].compact.map { |record| explicit_status(record) }
      explicit = statuses.find { |status| editorial_status_value?(status) }
      explicit || "needs editorial classification"
    end

    def accepted_working_version(record)
      return "unknown" unless record
      return "unknown" unless record["status"] == "accepted"
      return "unknown" unless record["editorial_scope"] == "accepted_current_working_version"

      finality = record["publication_status"] == "not_final" ? "not final" : "publication status unknown"
      "v#{record['version']} — accepted working version (#{finality})"
    end

    def editorial_status_value?(status)
      ACCEPTED_STATUSES.include?(status) ||
        REVISION_STATUSES.include?(status) ||
        %w[draft_for_editorial_review review needs_editorial_review].include?(status)
    end

    def explicit_status(record)
      value = record && record["status"].to_s
      value.nil? || value.empty? || value == "unknown" ? "unknown" : value
    end

    def next_action(repository_status, packet_status, draft_status, editorial_status, current_record)
      return "register manuscript unit in repository index" if repository_status == "missing"
      return "add explicit version and lifecycle metadata" if repository_status == "ambiguous"
      return "create or register research packet" if packet_status == "missing"
      return "record initial manuscript draft" if draft_status == "missing"
      return "classify editorial status" if editorial_status == "needs editorial classification"
      return "complete editorial review" if %w[draft_for_editorial_review review needs_editorial_review].include?(editorial_status)
      return "complete revision" if REVISION_STATUSES.include?(editorial_status)
      if ACCEPTED_STATUSES.include?(editorial_status)
        return "continue manuscript development; later authorial and line editing" if current_record&.dig("editorial_scope") == "accepted_current_working_version"

        return "none"
      end

      "review metadata"
    end

    def ambiguity_rows
      units.each_with_object([]) do |unit, items|
        group = chapter_groups[unit.canonical_id]
        next unless group && group["selection_state"] == "ambiguous"

        records = group.fetch("records", [])
        versioned = records.select { |record| semantic_version(record["version"]) }
        reason, action =
          if versioned.empty?
            [
              "no file has explicit version metadata; an unversioned manuscript file cannot be declared current",
              "add explicit version and lifecycle metadata to the manuscript unit"
            ]
          elsif duplicate_highest?(versioned)
            [
              "multiple files share the highest explicit version",
              "record an editorial choice of one current version and preserve the others"
            ]
          else
            [
              "repository index reports unresolved version selection",
              "add the smallest explicit metadata change that identifies the current version"
            ]
          end

        items << {
          "canonical_id" => unit.canonical_id,
          "title" => unit.title,
          "reason" => reason,
          "action" => action,
          "files" => records.sort_by { |record| record["path"] }.map do |record|
            {
              "path" => record["path"],
              "version" => record["version"] || "unknown",
              "index_state" => record["index_state"] || "ambiguous"
            }
          end
        }
      end
    end

    def unresolved_manuscript_relationships
      units.each_with_object([]) do |unit, items|
        group = chapter_groups[unit.canonical_id]
        next unless group && group["selection_state"] == "current"

        current = group.fetch("records", []).find do |record|
          record["index_state"] == "current" && packet?(record)
        end
        manuscript = group.fetch("records", []).find do |record|
          record["path"] == unit.path && record["index_state"] == "ambiguous"
        end
        next unless current && manuscript

        items << {
          "canonical_id" => unit.canonical_id,
          "manuscript_path" => manuscript["path"],
          "current_packet_path" => current["path"],
          "current_version" => current["version"]
        }
      end
    end

    def duplicate_highest?(records)
      versions = records.map { |record| semantic_version(record["version"]) }
      highest = versions.max
      versions.count(highest) > 1
    end

    def semantic_version(value)
      match = value.to_s.match(/\A(\d+)\.(\d+)(?:\.(\d+))?\z/)
      match && [match[1].to_i, match[2].to_i, (match[3] || 0).to_i]
    end

    def latest_date(paths)
      values = paths.map { |path| last_modified[path] }.compact
      values.empty? ? "unknown" : values.max
    end

    def packet?(record)
      record["path"].to_s.start_with?("research/chapter-packets/")
    end

    def chapter_groups
      @chapter_groups ||= index.fetch("chapters", []).to_h { |group| [group["canonical_id"], group] }
    end

    def dashboard_fingerprint
      digest = Digest::SHA256.new
      units.each do |unit|
        digest << [unit.canonical_id, unit.part, unit.number, unit.title, unit.path].join("\0") << "\0"
      end
      digest << JSON.generate(index) << "\0"
      last_modified.sort.each { |path, date| digest << path << "\0" << date << "\0" }
      digest.hexdigest
    end

    def escape_table(value)
      value.to_s.gsub("|", "\\|").gsub("\n", " ")
    end
  end
end
