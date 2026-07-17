# frozen_string_literal: true

require "date"
require "digest"
require "json"
require "pathname"
require "yaml"

module PalmaKnowledgeOS
  VERSION = "1.0.0"

  COMMON_REQUIRED = %w[id type status owner created privacy_level].freeze
  TYPE_REQUIRED = {
    "task" => %w[reviewer project priority scope],
    "decision" => %w[authority effective_date],
    "review" => %w[reviewer subject_refs],
    "chapter" => %w[chapter_number version version_status],
    "source_card" => %w[verification_status source_kind citation],
    "verification_issue" => %w[verification_status claim],
    "completion_report" => %w[task_id subject_refs],
    "research_gap" => %w[research_status question],
    "change_map" => %w[subject_refs change_scope]
  }.freeze

  TASK_STATUSES = %w[
    proposed authorized authorized_phase_1 authorized_phase_2a_2b in_progress
    blocked delivered review changes_requested accepted completed cancelled
  ].freeze

  ID_PATTERNS = {
    "task" => /\ATASK_[A-Z0-9-]+_[0-9]{4}\z/,
    "decision" => /\ADECISION_[0-9]{4}\z/,
    "review" => /\AREVIEW_[A-Z0-9-]+_[0-9]{4}\z/,
    "chapter" => /\ACHAPTER_[0-9]{2}\z/,
    "source_card" => /\A(?:SC-[0-9]{3}|SRC-[0-9]{4}-[0-9]{3})\z/,
    "verification_issue" => /\AVI-[0-9]{3}\z/,
    "completion_report" => /\AREPORT_TASK_[A-Z0-9-]+_[0-9]{4}\z/,
    "research_gap" => /\ARG-[0-9]{3}\z/,
    "change_map" => /\ACHANGE_MAP_[A-Z0-9_-]+\z/
  }.freeze

  RELATION_FIELDS = {
    "depends_on" => "depends_on",
    "related_to" => "related_to",
    "decision_refs" => "depends_on",
    "subject_refs" => "reviews",
    "source_refs" => "supported_by",
    "verification_refs" => "verifies",
    "chapter_refs" => "affects",
    "supersedes" => "supersedes"
  }.freeze

  Diagnostic = Struct.new(:severity, :rule_id, :path, :line, :message, :record_id, keyword_init: true) do
    def to_h
      {
        "severity" => severity,
        "rule_id" => rule_id,
        "path" => path,
        "line" => line,
        "message" => message,
        "record_id" => record_id
      }.compact
    end
  end

  ScanResult = Struct.new(:records, :diagnostics, :source_fingerprint, keyword_init: true) do
    def sorted_diagnostics
      order = { "ERROR" => 0, "WARNING" => 1, "INFO" => 2 }
      diagnostics.sort_by do |item|
        [order.fetch(item.severity, 9), item.path.to_s, item.line.to_i, item.rule_id, item.message]
      end
    end

    def error_count
      diagnostics.count { |item| item.severity == "ERROR" }
    end

    def warning_count
      diagnostics.count { |item| item.severity == "WARNING" }
    end

    def info_count
      diagnostics.count { |item| item.severity == "INFO" }
    end

    def report
      {
        "schema_version" => 1,
        "validator_version" => VERSION,
        "mode" => "legacy_warning",
        "read_only" => true,
        "source_fingerprint" => source_fingerprint,
        "status" => error_count.zero? ? "pass" : "fail",
        "counts" => {
          "records" => records.length,
          "errors" => error_count,
          "warnings" => warning_count,
          "info" => info_count
        },
        "diagnostics" => sorted_diagnostics.map(&:to_h)
      }
    end
  end

  module_function

  def canonical_source_card_id(value)
    id = value.to_s
    return id if id.match?(/\ASC-[0-9]{3}\z/)

    match = id.match(/\ASRC-([0-9]{4})-([0-9]{3})\z/)
    match ? "SC-#{match[2]}" : nil
  end

  def source_card_year(value)
    match = value.to_s.match(/\ASRC-([0-9]{4})-[0-9]{3}\z/)
    match && match[1]
  end

  def normalize(value)
    case value
    when Date, Time then value.iso8601
    when Hash then value.to_h { |key, item| [key.to_s, normalize(item)] }
    when Array then value.map { |item| normalize(item) }
    else value
    end
  end

  class Scanner
    attr_reader :root

    def initialize(root)
      @root = Pathname.new(root).expand_path
      @diagnostics = []
      @records = []
      @source_files = []
    end

    def scan
      discover.each { |path| parse_path(path) }
      validate_records
      ScanResult.new(
        records: @records.sort_by { |record| [record["type"], record["canonical_id"], record["path"], record["id"]] },
        diagnostics: @diagnostics,
        source_fingerprint: fingerprint
      )
    end

    private

    def discover
      patterns = [
        "governance/*.md",
        "research/source-cards/*.{md,yaml,yml}",
        "research/verification/*.md",
        "research/chapter-packets/*.md",
        "manuscript/01-introduction.md",
        "manuscript/99-conclusion.md",
        "manuscript/part-*/*.md"
      ]
      patterns.flat_map { |pattern| Dir[root.join(pattern).to_s] }
              .map { |path| Pathname.new(path) }
              .select(&:file?)
              .uniq
              .sort_by { |path| relative(path) }
    end

    def parse_path(path)
      text = path.read(encoding: "UTF-8")
      @source_files << [relative(path), text]

      if relative(path) == "research/verification/VERIFICATION_ISSUES.md"
        parse_verification_blocks(path, text)
      elsif relative(path).start_with?("research/source-cards/")
        parse_source_card(path, text)
      elsif relative(path).start_with?("research/chapter-packets/")
        parse_chapter_packet(path, text)
      elsif relative(path).start_with?("manuscript/")
        parse_manuscript(path, text)
      else
        parse_governance(path, text)
      end
    rescue StandardError => e
      diagnostic("ERROR", "PARSE_ERROR", path, e.message)
    end

    def parse_governance(path, text)
      data = frontmatter(text)
      if data
        add_record(path, data, "frontmatter", text)
        return
      end

      basename = path.basename(".md").to_s
      type, id =
        case basename
        when /\A(TASK_[A-Z0-9-]+_[0-9]{4})(?:_|\z)/ then ["task", Regexp.last_match(1)]
        when /\A(DECISION_[0-9]{4})/ then ["decision", Regexp.last_match(1)]
        when /\A(REVIEW_[A-Z0-9_-]+_[0-9]{4})/ then ["review", Regexp.last_match(1)]
        when /\AIMPLEMENTATION_REPORT_(TASK_[A-Z0-9_-]+_[0-9]{4})\z/
          ["completion_report", "REPORT_#{Regexp.last_match(1)}"]
        else
          return
        end

      labels = markdown_labels(text)
      data = {
        "id" => id,
        "type" => type,
        "status" => normalize_status(labels["status"] || "unknown"),
        "owner" => labels["owner"] || "unknown",
        "reviewer" => labels["reviewer"],
        "created" => labels["date"],
        "depends_on" => extract_ids(labels["depends on"]),
        "title" => first_heading(text)
      }.compact
      add_record(path, data, "legacy_labels", text)
    end

    def parse_source_card(path, text)
      data = fenced_yaml(text)
      raise "source card has no readable fenced YAML mapping" unless data

      data["type"] = "source_card"
      data["status"] ||= data["verification_status"] || "unknown"
      data["owner"] ||= "research"
      data["created"] ||= data["date_accessed"]
      data["privacy_level"] ||= "internal"
      data["source_kind"] ||= data["source_type"]
      data["citation"] ||= [data["author"], data["title"], data["year"]].compact.join(". ")
      add_record(path, data, "legacy_fenced_yaml", text)
    end

    def parse_verification_blocks(path, text)
      yaml_blocks(text).each do |data|
        next unless data["id"].to_s.match?(/\AVI-[0-9]{3}\z/)

        data["type"] = "verification_issue"
        data["verification_status"] ||= data["status"]
        data["claim"] ||= data["title"]
        data["owner"] ||= data["reviewer"] || "research"
        data["created"] ||= "unknown"
        data["privacy_level"] ||= "internal"
        add_record(path, data, "legacy_fenced_yaml", text, warn_legacy: false)
      end
    end

    def parse_chapter_packet(path, text)
      data = fenced_yaml(text)
      raise "chapter packet has no readable fenced YAML mapping" unless data

      number = data["chapter"].to_s[/Chapter\s+(\d+)/i, 1]&.to_i
      number ||= path.basename.to_s[/\A(\d{2})-/, 1]&.to_i
      raise "chapter packet number cannot be determined" unless number

      data = data.merge(
        "id" => data["packet_id"] || "CHAPTER_PACKET_#{format('%02d', number)}_#{data['version']}",
        "canonical_id" => "CHAPTER_#{format('%02d', number)}",
        "type" => "chapter",
        "chapter_number" => number,
        "version_status" => data["status"] || "unknown",
        "owner" => data["owner"] || "research",
        "created" => data["created_date"] || "unknown",
        "privacy_level" => "internal",
        "title" => first_heading(text)
      )
      add_record(path, data, "legacy_fenced_yaml", text)
    end

    def parse_manuscript(path, text)
      rel = relative(path)
      number =
        if rel == "manuscript/01-introduction.md"
          0
        elsif rel == "manuscript/99-conclusion.md"
          99
        else
          path.basename.to_s[/\A(\d{2})-/, 1]&.to_i
        end
      return unless number

      add_record(
        path,
        {
          "id" => "MANUSCRIPT_CHAPTER_#{format('%02d', number)}",
          "canonical_id" => "CHAPTER_#{format('%02d', number)}",
          "type" => "chapter",
          "status" => "unknown",
          "owner" => "chief_editor",
          "created" => "unknown",
          "privacy_level" => "internal",
          "chapter_number" => number,
          "title" => first_heading(text)
        },
        "legacy_filename",
        text
      )
    end

    def add_record(path, raw_data, metadata_format, text, warn_legacy: true)
      data = PalmaKnowledgeOS.normalize(raw_data)
      id = data["id"].to_s
      canonical_id = data["canonical_id"].to_s
      canonical_id = PalmaKnowledgeOS.canonical_source_card_id(id).to_s if data["type"] == "source_card"
      canonical_id = id if canonical_id.empty?

      relationships = {}
      RELATION_FIELDS.each do |field, relation|
        values = Array(data[field]).flat_map { |value| extract_ids(value) }
        relationships[relation] = values unless values.empty?
      end

      if data["type"] == "source_card"
        related = Array(data["related_cards"]).flat_map { |value| extract_source_ids(value) }
        relationships["related_to"] = related unless related.empty?
      elsif data["type"] == "chapter"
        sources = extract_source_ids(text)
        verifications = text.scan(/\bVI-[0-9]{3}\b/).uniq.sort
        relationships["supported_by"] = sources unless sources.empty?
        relationships["verifies"] = verifications unless verifications.empty?
      elsif data["type"] == "verification_issue" && data["affected_source_card"]
        relationships["affects"] = [PalmaKnowledgeOS.canonical_source_card_id(data["affected_source_card"]) || data["affected_source_card"]]
      end

      record = {
        "id" => id,
        "canonical_id" => canonical_id,
        "type" => data["type"].to_s,
        "status" => data["status"].to_s,
        "title" => data["title"] || first_heading(text),
        "path" => relative(path),
        "metadata_format" => metadata_format,
        "record_state" => metadata_format == "frontmatter" ? "current" : "legacy",
        "owner" => data["owner"],
        "created" => data["created"],
        "privacy_level" => data["privacy_level"],
        "version" => data["version"]&.to_s,
        "chapter_number" => data["chapter_number"],
        "source_id_format" => source_id_format(id, data["type"]),
        "legacy_year" => PalmaKnowledgeOS.source_card_year(id),
        "relationships" => relationships.sort.to_h,
        "metadata" => data
      }.compact
      @records << record

      if warn_legacy && metadata_format != "frontmatter"
        diagnostic(
          "WARNING",
          "LEGACY_METADATA",
          path,
          "#{id} uses #{metadata_format}; accepted in legacy warning-mode",
          id
        )
      end
    end

    def validate_records
      validate_current_frontmatter
      validate_ids
      validate_relationships
      validate_privacy_markers
    end

    def validate_current_frontmatter
      @records.select { |record| record["metadata_format"] == "frontmatter" }.each do |record|
        data = record["metadata"]
        required = COMMON_REQUIRED + TYPE_REQUIRED.fetch(record["type"], [])
        required.reject { |field| present?(data[field]) }.each do |field|
          diagnostic("ERROR", "FM_REQUIRED", record["path"], "missing required field: #{field}", record["id"])
        end

        if record["type"] == "task" && !TASK_STATUSES.include?(record["status"])
          diagnostic("ERROR", "FM_STATUS", record["path"], "invalid task status: #{record['status']}", record["id"])
        end

        pattern = ID_PATTERNS[record["type"]]
        if pattern && !record["id"].match?(pattern)
          diagnostic("ERROR", "ID_FORMAT", record["path"], "invalid #{record['type']} ID: #{record['id']}", record["id"])
        end

        if data["personal_story_use"] == "approved" && !present?(data["author_approval_ref"])
          diagnostic("ERROR", "PRIV_APPROVAL", record["path"], "approved personal story lacks author_approval_ref", record["id"])
        end
      end
    end

    def validate_ids
      @records.group_by { |record| record["id"] }.each do |id, records|
        next if id.empty? || records.length == 1

        records.each do |record|
          record["record_state"] = "ambiguous"
          diagnostic("ERROR", "ID_DUPLICATE", record["path"], "duplicate ID: #{id}", id)
        end
      end

      @records.select { |record| record["type"] == "source_card" }
              .group_by { |record| record["canonical_id"] }
              .each do |canonical_id, records|
        next if canonical_id.empty? || records.length == 1

        records.each do |record|
          record["record_state"] = "ambiguous"
          diagnostic(
            "ERROR",
            "SOURCE_ID_COLLISION",
            record["path"],
            "source-card IDs normalize to the same canonical ID: #{canonical_id}",
            record["id"]
          )
        end
      end
    end

    def validate_relationships
      known = @records.flat_map { |record| [record["id"], record["canonical_id"]] }.to_h { |id| [id, true] }
      @records.each do |record|
        record["relationships"].each_value do |references|
          references.each do |reference|
            normalized = PalmaKnowledgeOS.canonical_source_card_id(reference) || reference
            next if known[normalized]

            severity = record["record_state"] == "current" ? "ERROR" : "WARNING"
            diagnostic(severity, "REF_MISSING", record["path"], "unresolved reference: #{reference}", record["id"])
          end
        end
      end
    end

    def validate_privacy_markers
      @records.select { |record| record["type"] == "task" }.each do |record|
        text = root.join(record["path"]).read(encoding: "UTF-8")
        next unless text.match?(/\b(?:PERSONAL_EXAMPLE|PRIVATE_STORY):/i)
        next if record["metadata"]["personal_story_use"] == "approved" &&
                present?(record["metadata"]["author_approval_ref"])

        diagnostic("ERROR", "PRIV_MARKER", record["path"], "explicit personal-story marker lacks author approval", record["id"])
      end
    end

    def frontmatter(text)
      match = text.match(/\A---\s*\n(.*?)\n---\s*\n/m)
      match && safe_yaml(match[1])
    end

    def fenced_yaml(text)
      yaml_blocks(text).first
    end

    def yaml_blocks(text)
      text.scan(/```yaml\s*\n(.*?)\n```/m).each_with_object([]) do |raw, blocks|
        value = safe_yaml(raw.first)
        blocks << value if value
      end
    end

    def safe_yaml(raw)
      value = YAML.safe_load(raw, permitted_classes: [Date], aliases: false)
      value.is_a?(Hash) ? PalmaKnowledgeOS.normalize(value) : nil
    end

    def markdown_labels(text)
      labels = {}
      text.each_line.first(20).each do |line|
        match = line.match(/^\*\*([^*]+):\*\*\s*(.+?)\s*$/)
        labels[match[1].downcase] = match[2].strip if match
      end
      labels
    end

    def first_heading(text)
      text.each_line do |line|
        return line.sub(/^#+\s*/, "").strip if line.match?(/^#\s+/)
      end
      nil
    end

    def normalize_status(value)
      value.to_s.downcase.gsub(/[^a-z0-9]+/, "_").sub(/\A_/, "").sub(/_\z/, "")
    end

    def extract_ids(value)
      value.to_s.scan(/\b(?:TASK_[A-Z0-9_-]+_[0-9]{4}|DECISION_[0-9]{4}|REVIEW_[A-Z0-9_-]+_[0-9]{4}|REPORT_TASK_[A-Z0-9_-]+_[0-9]{4}|SC-[0-9]{3}|SRC-[0-9]{4}-[0-9]{3}|VI-[0-9]{3}|CHAPTER_[0-9]{2})\b/).uniq.sort
    end

    def extract_source_ids(value)
      value.to_s.scan(/\b(?:SC-[0-9]{3}|SRC-[0-9]{4}-[0-9]{3})\b/)
           .map { |id| PalmaKnowledgeOS.canonical_source_card_id(id) }
           .compact
           .uniq
           .sort
    end

    def source_id_format(id, type)
      return nil unless type == "source_card"
      return "canonical" if id.match?(/\ASC-[0-9]{3}\z/)
      return "legacy_alias" if id.match?(/\ASRC-[0-9]{4}-[0-9]{3}\z/)

      "invalid"
    end

    def present?(value)
      !value.nil? && !(value.respond_to?(:empty?) && value.empty?) && value.to_s != ""
    end

    def relative(path)
      path.relative_path_from(root).to_s
    end

    def diagnostic(severity, rule_id, path, message, record_id = nil)
      relative_path = path.is_a?(Pathname) ? relative(path) : path.to_s
      @diagnostics << Diagnostic.new(
        severity: severity,
        rule_id: rule_id,
        path: relative_path,
        line: 1,
        message: message,
        record_id: record_id
      )
    end

    def fingerprint
      digest = Digest::SHA256.new
      @source_files.sort_by(&:first).each do |path, text|
        digest << path << "\0" << text << "\0"
      end
      digest.hexdigest
    end
  end

  class IndexBuilder
    def initialize(result)
      @result = result
    end

    def build
      records = @result.records.reject { |record| record.dig("metadata", "fixture") }
      chapters = build_chapters(records.select { |record| record["type"] == "chapter" })
      non_chapters = records.reject { |record| record["type"] == "chapter" }
      catalog = %w[current legacy ambiguous].to_h do |state|
        items = non_chapters.select { |record| record["record_state"] == state }.map { |record| public_record(record) }
        [state, items.sort_by { |item| [item["type"], item["canonical_id"], item["path"]] }]
      end
      chapter_state_counts = %w[current legacy ambiguous].to_h do |state|
        [state, chapters.sum { |chapter| chapter["records"].count { |record| record["index_state"] == state } }]
      end

      {
        "schema_version" => 1,
        "generator_version" => VERSION,
        "generated" => true,
        "source_of_truth" => "GitHub repository metadata",
        "source_fingerprint" => @result.source_fingerprint,
        "classification" => {
          "current" => "canonical metadata or a uniquely selected highest chapter version",
          "legacy" => "accepted transition format or a superseded lower chapter version",
          "ambiguous" => "missing/conflicting identity or version; no silent choice was made"
        },
        "summary" => {
          "records" => records.length,
          "current" => catalog["current"].length + chapter_state_counts["current"],
          "legacy" => catalog["legacy"].length + chapter_state_counts["legacy"],
          "ambiguous" => catalog["ambiguous"].length + chapter_state_counts["ambiguous"],
          "non_chapter_current" => catalog["current"].length,
          "non_chapter_legacy" => catalog["legacy"].length,
          "non_chapter_ambiguous" => catalog["ambiguous"].length,
          "chapter_groups" => chapters.length,
          "validation_errors" => @result.error_count,
          "validation_warnings" => @result.warning_count
        },
        "catalog" => catalog,
        "chapters" => chapters,
        "edges" => build_edges(records)
      }
    end

    def render_markdown(index = build)
      lines = [
        "# Palma Repository Index",
        "",
        "> Generated by `generate_repository_index.rb`. Do not edit by hand.",
        "",
        "- Generator version: `#{index['generator_version']}`",
        "- Source fingerprint: `#{index['source_fingerprint']}`",
        "- Validation errors: #{index.dig('summary', 'validation_errors')}",
        "- Validation warnings: #{index.dig('summary', 'validation_warnings')}",
        "",
        "## Classification",
        "",
        "- **current** — canonical metadata or a uniquely selected highest chapter version.",
        "- **legacy** — accepted transition format or a superseded lower chapter version.",
        "- **ambiguous** — identity/version is missing or conflicts; the generator made no silent choice.",
        "",
        "## Chapters",
        "",
        "| Chapter | Selection | Current path | Version | Legacy versions | Ambiguous records |",
        "|---|---|---|---|---:|---:|"
      ]

      index["chapters"].each do |chapter|
        current = chapter["records"].find { |record| record["index_state"] == "current" }
        lines << "| #{chapter['canonical_id']} | #{chapter['selection_state']} | #{current&.dig('path') || '—'} | #{current&.dig('version') || '—'} | #{chapter['records'].count { |r| r['index_state'] == 'legacy' }} | #{chapter['records'].count { |r| r['index_state'] == 'ambiguous' }} |"
      end

      %w[current legacy ambiguous].each do |state|
        lines.concat(["", "## #{state.capitalize} records", "", "| ID | Type | Status | Path |", "|---|---|---|---|"])
        items = index.dig("catalog", state)
        if items.empty?
          lines << "| — | — | — | — |"
        else
          items.each do |record|
            lines << "| #{record['canonical_id']} | #{record['type']} | #{record['status']} | #{record['path']} |"
          end
        end
      end

      lines.join("\n") + "\n"
    end

    private

    def build_chapters(records)
      records.group_by { |record| record["canonical_id"] }.sort.map do |canonical_id, group|
        copies = group.map { |record| public_record(record) }
        versioned = copies.select { |record| semantic_version(record["version"]) }

        selection_state =
          if versioned.empty?
            copies.each { |record| record["index_state"] = "ambiguous" }
            "ambiguous"
          else
            highest = versioned.map { |record| semantic_version(record["version"]) }.max
            winners = versioned.select { |record| semantic_version(record["version"]) == highest }
            if winners.length == 1
              copies.each do |record|
                record["index_state"] =
                  if record.equal?(winners.first)
                    "current"
                  elsif semantic_version(record["version"])
                    "legacy"
                  else
                    "ambiguous"
                  end
              end
              "current"
            else
              copies.each do |record|
                record["index_state"] = semantic_version(record["version"]) == highest ? "ambiguous" : "legacy"
              end
              "ambiguous"
            end
          end

        {
          "canonical_id" => canonical_id,
          "selection_state" => selection_state,
          "records" => copies.sort_by { |record| [state_order(record["index_state"]), semantic_version(record["version"]) || [], record["path"]] }
        }
      end
    end

    def build_edges(records)
      records.flat_map do |record|
        record["relationships"].flat_map do |relation, targets|
          targets.map do |target|
            {
              "from" => record["canonical_id"],
              "relation" => relation,
              "to" => PalmaKnowledgeOS.canonical_source_card_id(target) || target,
              "source_path" => record["path"]
            }
          end
        end
      end.uniq.sort_by { |edge| [edge["from"], edge["relation"], edge["to"], edge["source_path"]] }
    end

    def public_record(record)
      %w[
        id canonical_id type status title path metadata_format record_state owner
        created privacy_level version chapter_number source_id_format legacy_year
        relationships
      ].to_h { |key| [key, record[key]] }.reject { |_key, value| value.nil? }
    end

    def semantic_version(value)
      match = value.to_s.match(/\A(\d+)\.(\d+)(?:\.(\d+))?\z/)
      match && [match[1].to_i, match[2].to_i, (match[3] || 0).to_i]
    end

    def state_order(state)
      { "current" => 0, "legacy" => 1, "ambiguous" => 2 }.fetch(state, 9)
    end
  end
end
