#!/usr/bin/env ruby
# frozen_string_literal: true

require "date"
require "digest"
require "fileutils"
require "json"
require "pathname"
require "time"
require "yaml"

ROOT = Pathname.new(__dir__).parent.expand_path
CARDS_DIR = ROOT / "research/source-cards"
VALIDATION_DIR = ROOT / "research/validation"

REQUIRED_FIELDS = %w[
  id title author year source_type publisher_or_journal url_or_identifier
  date_accessed research_track book_chapters related_concepts related_cards
  core_claim summary key_evidence important_quote quote_page_or_location
  methodology sample limitations counterarguments business_implication
  palma_implication potential_case_use potential_linkedin_post
  confidence_level verification_status notes
].freeze

SOURCE_TYPES = [
  "book",
  "book_chapter",
  "journal_article",
  "peer_reviewed_journal_article",
  "peer_reviewed_practitioner_journal_article",
  "practitioner_journal_article",
  "practitioner_analysis",
  "industry_report",
  "industry_standard_framework",
  "institutional_primary_report",
  "institutional_framework_report",
  "academic_book",
  "academic_monograph",
  "book + journal_article",
  "journal_article + book",
  "industry_research + magazine_article"
].freeze

RESEARCH_TRACKS = [
  "Track A - Theoretical Foundations",
  "Track B - Modern Business Evidence, 2022-2026",
  "Track C - Business Case Studies",
  "Track D - Community Cases",
  "Track E - Communication Failures",
  "Track F - Measurement",
  "Track G - Methods",
  "Track H - Anti-Palma",
  "Track B - Modern Business Evidence / Verification Follow-up (TASK_CLAUDE_0004, item 2)",
  "Track A follow-up - Relationship Capital definitional research (TASK_CLAUDE_0004, item 1)",
  "Track B follow-up - Google Project Aristotle primary verification (TASK_CLAUDE_0004, item 4)",
  "Track G - Business case per active chapter (TASK_CLAUDE_0004, item 5)",
  "TASK_CLAUDE_0005 - Relationship Capital decision memo, comparison term (Network Capital)",
  "Evidence repair - TASK_CLAUDE_0007",
  "TASK_CLAUDE_0008 - Wave 2, Chapter 3 grounding",
  "TASK_CLAUDE_0008 - Wave 2, Chapter 4 grounding",
  "TASK_CLAUDE_0008 - Wave 2, Chapter 5 grounding",
  "TASK_CLAUDE_0008 - Wave 2, Chapter 9 grounding",
  "Track G - Wave 3: Listen",
  "Track G - Wave 3: Listen/Design",
  "Track G - Wave 3: Map",
  "Track G - Wave 3: Activate",
  "Track G - Wave 3: Measure",
  "Track G - Wave 3: Design/Measure"
].freeze

SUPPORTING_DOCUMENTS = [
  "research/README.md",
  "research/MIGRATION_REPORT_TASK-0018.md",
  "research/syntheses/literature-map.md",
  "research/syntheses/missing-theories-and-conflicting-definitions.md",
  "research/anti-palma/anti-palma-argument-map.md",
  "research/open-questions/open-questions-log.md",
  "research/verification/claims-ledger.md",
  "research/verification/VERIFICATION_ISSUES.md"
].freeze

def fenced_yaml(text)
  match = text.match(/```yaml\s*\n(.*?)\n```/m)
  raise "no fenced YAML block found" unless match

  YAML.safe_load(match[1], permitted_classes: [Date], aliases: false)
end

def empty_value?(value)
  value.nil? || (value.respond_to?(:empty?) && value.empty?) ||
    (value.is_a?(String) && value.strip.empty?)
end

def canonical_source_card_id(value)
  id = value.to_s
  return id if id.match?(/\ASC-\d{3}\z/)

  match = id.match(/\ASRC-\d{4}-(\d{3})\z/)
  match ? "SC-#{match[1]}" : nil
end

errors = []
warnings = []
cards = []

card_files = Dir[CARDS_DIR.join("*.md").to_s].sort
card_files.each do |file|
  relative = Pathname.new(file).relative_path_from(ROOT).to_s
  begin
    data = fenced_yaml(File.read(file, encoding: "UTF-8"))
    unless data.is_a?(Hash)
      errors << { check: "parseable_yaml", file: relative, message: "YAML block is not a mapping" }
      next
    end
    cards << { file: relative, data: data }
  rescue StandardError => e
    errors << { check: "parseable_yaml", file: relative, message: e.message }
  end
end

cards.each do |card|
  file = card[:file]
  data = card[:data]

  (REQUIRED_FIELDS - data.keys.map(&:to_s)).each do |field|
    errors << { check: "required_fields", file: file, message: "missing field: #{field}" }
  end

  REQUIRED_FIELDS.each do |field|
    next unless data.key?(field)
    next unless empty_value?(data[field])

    errors << { check: "empty_required_fields", file: file, message: "empty field: #{field}" }
  end

  id = data["id"].to_s
  unless id.match?(/\A(?:SC-\d{3}|SRC-\d{4}-\d{3})\z/)
    errors << { check: "id_format", file: file, message: "invalid source-card ID: #{id}" }
  end

  unless SOURCE_TYPES.include?(data["source_type"].to_s)
    errors << { check: "source_type", file: file, message: "unrecognized source type: #{data['source_type']}" }
  end

  unless RESEARCH_TRACKS.include?(data["research_track"].to_s)
    errors << { check: "research_track", file: file, message: "unrecognized research track: #{data['research_track']}" }
  end

  status = data["verification_status"].to_s
  unless status.match?(/\A(?:verified|partially_verified|checked|discovery|pending|unverified|needs_primary_source|restricted)(?:_[a-z0-9_-]+)*\z/)
    errors << { check: "verification_status", file: file, message: "unrecognized verification status: #{status}" }
  end

  Array(data["book_chapters"]).each do |chapter|
    next if chapter.to_s.start_with?("Introduction")

    number = chapter.to_s[/Chapter\s+(\d+)/, 1]
    if number.nil? || !(1..21).cover?(number.to_i)
      errors << { check: "chapter_reference", file: file, message: "invalid chapter reference: #{chapter}" }
    end
  end
end

ids = cards.map { |card| canonical_source_card_id(card[:data]["id"]) || card[:data]["id"].to_s }
ids.group_by(&:itself).each do |id, occurrences|
  next if id.empty? || occurrences.length == 1

  errors << { check: "unique_ids", file: nil, message: "duplicate source-card ID: #{id}" }
end

cards.each do |card|
  Array(card[:data]["related_cards"]).each do |reference|
    referenced_ids = reference.to_s.scan(/(?:SC-\d{3}|SRC-\d{4}-\d{3})/)
    if referenced_ids.empty?
      warnings << { check: "related_card_reference", file: card[:file], message: "related-card entry has no SC ID: #{reference}" }
    end
    referenced_ids.each do |referenced_id|
      normalized_id = canonical_source_card_id(referenced_id) || referenced_id
      next if ids.include?(normalized_id)

      errors << { check: "related_card_reference", file: card[:file], message: "unknown related card: #{referenced_id}" }
    end
  end
end

identifiers = Hash.new { |hash, key| hash[key] = [] }
cards.each do |card|
  value = card[:data]["url_or_identifier"].to_s.strip
  if value.empty?
    errors << { check: "source_identifier", file: card[:file], message: "missing source URL or identifier" }
    next
  end
  value.split(/\s+;\s+/).each { |identifier| identifiers[identifier] << card[:file] }
end
identifiers.each do |identifier, files|
  next if files.uniq.length == 1

  errors << { check: "duplicate_source_identifier", file: nil, message: "duplicate identifier #{identifier}: #{files.uniq.join(', ')}" }
end

SUPPORTING_DOCUMENTS.each do |relative|
  path = ROOT / relative
  unless path.file?
    errors << { check: "required_document", file: relative, message: "missing supporting document" }
    next
  end
  next if relative.end_with?("README.md", "VERIFICATION_ISSUES.md")

  begin
    fenced_yaml(path.read(encoding: "UTF-8"))
  rescue StandardError => e
    errors << { check: "supporting_yaml", file: relative, message: e.message }
  end
end

Dir[ROOT.join("research/**/*.md").to_s].sort.each do |file|
  text = File.read(file, encoding: "UTF-8")
  text.scan(/\]\(([^)]+)\)/).flatten.each do |target|
    next if target.match?(/\A(?:https?:|mailto:|#)/)

    clean = target.split("#", 2).first
    resolved = Pathname.new(file).dirname.join(clean).cleanpath
    next if resolved.exist?

    errors << {
      check: "local_link",
      file: Pathname.new(file).relative_path_from(ROOT).to_s,
      message: "broken local link: #{target}"
    }
  end
end

verification_path = ROOT / "research/verification/VERIFICATION_ISSUES.md"
if verification_path.file?
  verification_text = verification_path.read(encoding: "UTF-8")
  %w[VI-001 VI-002 VI-003 VI-004].each do |issue_id|
    unless verification_text.include?(issue_id)
      errors << { check: "verification_restriction", file: "research/verification/VERIFICATION_ISSUES.md", message: "missing #{issue_id}" }
    end
  end
end

file_hashes = cards.to_h do |card|
  path = ROOT / card[:file]
  [card[:file], Digest::SHA256.file(path).hexdigest]
end

fingerprint_files = Dir[ROOT.join("research/**/*.md").to_s]
                    .reject { |path| Pathname.new(path).relative_path_from(ROOT).to_s.start_with?("research/validation/") }
                    .sort
input_digest = Digest::SHA256.new
fingerprint_files.each do |path|
  relative = Pathname.new(path).relative_path_from(ROOT).to_s
  input_digest << relative << "\0" << File.read(path, encoding: "UTF-8") << "\0"
end

report = {
  report_id: "VAL-CLAUDE-001",
  validator_version: "legacy-compatible-2",
  source_fingerprint: input_digest.hexdigest,
  source_card_count: card_files.length,
  parsed_source_card_count: cards.length,
  unique_source_card_ids: ids.uniq.length,
  duplicate_source_identifiers: errors.count { |item| item[:check] == "duplicate_source_identifier" },
  error_count: errors.length,
  warning_count: warnings.length,
  status: errors.empty? ? "pass" : "fail",
  checks: {
    yaml_parse: "completed",
    required_fields: "completed",
    unique_ids: "completed",
    source_types: "completed",
    research_tracks: "completed",
    chapter_references: "completed",
    related_card_references: "completed",
    verification_statuses: "completed",
    source_identifiers: "completed",
    duplicate_identifiers: "completed",
    local_links: "completed",
    verification_restrictions: "completed"
  },
  errors: errors,
  warnings: warnings,
  source_card_ids: ids.sort,
  source_card_sha256: file_hashes
}

FileUtils.mkdir_p(VALIDATION_DIR)
File.write(VALIDATION_DIR / "claude-package-validation.json", JSON.pretty_generate(report) + "\n")

human = <<~MARKDOWN
  # Claude Research Package — Structural Validation

  Report ID: `VAL-CLAUDE-001`  
  Source fingerprint: `#{report[:source_fingerprint]}`
  Status: **#{report[:status].upcase}**

  ## Result

  - Source cards found: #{report[:source_card_count]}
  - Source cards parsed: #{report[:parsed_source_card_count]}
  - Unique source-card IDs: #{report[:unique_source_card_ids]}
  - Errors: #{report[:error_count]}
  - Warnings: #{report[:warning_count]}

  ## Checks completed

  - Parseable fenced YAML.
  - Required and non-empty fields.
  - `SC-###` ID format and uniqueness.
  - Recognized source types and research tracks.
  - Chapter references within Chapters 1–21.
  - Related-card references resolve to imported cards.
  - Verification-status syntax.
  - Source URLs or identifiers present.
  - Duplicate source identifiers.
  - Practical local Markdown-link check.
  - Presence of VI-001 through VI-004 restrictions.

  ## Errors

  #{errors.empty? ? "None." : errors.map { |item| "- `#{item[:check]}` — #{item[:file]}: #{item[:message]}" }.join("\n")}

  ## Warnings

  #{warnings.empty? ? "None." : warnings.map { |item| "- `#{item[:check]}` — #{item[:file]}: #{item[:message]}" }.join("\n")}

  ## Scope

  This is structural validation only. It does not approve Claude's interpretations, verify external sources, or authorize manuscript use. Editorial review remains assigned to ChatGPT.

  The machine-readable companion report is `research/validation/claude-package-validation.json`.
MARKDOWN

File.write(VALIDATION_DIR / "claude-package-validation.md", human)
puts JSON.pretty_generate(report.slice(:status, :source_card_count, :parsed_source_card_count, :unique_source_card_ids, :error_count, :warning_count))
exit(errors.empty? ? 0 : 1)
