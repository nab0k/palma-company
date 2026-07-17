# frozen_string_literal: true

require "fileutils"
require "json"
require "minitest/autorun"
require "tmpdir"
require_relative "../scripts/palma_metadata"

class MetadataValidatorTest < Minitest::Test
  FIXTURE_ROOT = File.expand_path("fixtures/metadata_repo", __dir__)

  def scan(root = FIXTURE_ROOT)
    PalmaKnowledgeOS::Scanner.new(root).scan
  end

  def test_both_source_card_id_formats_normalize_to_one_family
    records = scan.records.select { |record| record["type"] == "source_card" }
    by_id = records.to_h { |record| [record["id"], record] }

    assert_equal "SC-001", by_id.fetch("SC-001").fetch("canonical_id")
    assert_equal "canonical", by_id.fetch("SC-001").fetch("source_id_format")
    assert_equal "SC-002", by_id.fetch("SRC-2026-002").fetch("canonical_id")
    assert_equal "legacy_alias", by_id.fetch("SRC-2026-002").fetch("source_id_format")
    assert_equal "2026", by_id.fetch("SRC-2026-002").fetch("legacy_year")
  end

  def test_legacy_metadata_warns_without_blocking
    result = scan

    assert_equal 0, result.error_count
    assert_operator result.warning_count, :>, 0
    assert result.diagnostics.any? { |item| item.rule_id == "LEGACY_METADATA" }
    assert_equal JSON.generate(result.report), JSON.generate(scan.report)
  end

  def test_alias_collision_is_blocking_and_ambiguous
    Dir.mktmpdir do |directory|
      FileUtils.cp_r("#{FIXTURE_ROOT}/.", directory)
      File.write(
        File.join(directory, "research/source-cards/collision.md"),
        "```yaml\nid: SRC-2025-001\ntitle: Collision\nverification_status: checked\n```\n",
        encoding: "UTF-8"
      )

      result = scan(directory)
      collisions = result.records.select { |record| record["canonical_id"] == "SC-001" }

      assert_operator result.error_count, :>, 0
      assert collisions.all? { |record| record["record_state"] == "ambiguous" }
      assert result.diagnostics.any? { |item| item.rule_id == "SOURCE_ID_COLLISION" }
    end
  end

  def test_validator_does_not_create_files
    before = Dir.glob(File.join(FIXTURE_ROOT, "**/*"), File::FNM_DOTMATCH).sort
    scan
    after = Dir.glob(File.join(FIXTURE_ROOT, "**/*"), File::FNM_DOTMATCH).sort

    assert_equal before, after
  end

  def test_current_metadata_errors_do_not_downgrade_to_legacy_warnings
    Dir.mktmpdir do |directory|
      FileUtils.cp_r("#{FIXTURE_ROOT}/.", directory)
      File.write(
        File.join(directory, "governance/TASK_CODEX_9993.md"),
        "---\nid: TASK_CODEX_9993\ntype: task\nstatus: invented\nowner: codex\ncreated: 2026-07-17\nprivacy_level: internal\ndepends_on:\n  - TASK_CODEX_0000\n---\n# Invalid current fixture\n",
        encoding: "UTF-8"
      )

      result = scan(directory)
      rules = result.diagnostics.select { |item| item.path.end_with?("TASK_CODEX_9993.md") }.map(&:rule_id)

      assert_includes rules, "FM_REQUIRED"
      assert_includes rules, "FM_STATUS"
      assert_includes rules, "REF_MISSING"
    end
  end
end
