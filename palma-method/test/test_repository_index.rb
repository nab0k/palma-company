# frozen_string_literal: true

require "json"
require "fileutils"
require "minitest/autorun"
require "open3"
require "rbconfig"
require "tmpdir"
require_relative "../scripts/palma_metadata"

class RepositoryIndexTest < Minitest::Test
  FIXTURE_ROOT = File.expand_path("fixtures/metadata_repo", __dir__)
  GENERATOR = File.expand_path("../scripts/generate_repository_index.rb", __dir__)

  def build
    result = PalmaKnowledgeOS::Scanner.new(FIXTURE_ROOT).scan
    builder = PalmaKnowledgeOS::IndexBuilder.new(result)
    [builder, builder.build]
  end

  def test_chapter_index_distinguishes_current_legacy_and_ambiguous
    _builder, index = build
    chapter = index.fetch("chapters").find { |item| item["canonical_id"] == "CHAPTER_06" }
    by_path = chapter.fetch("records").to_h { |record| [record["path"], record] }

    assert_equal "current", chapter.fetch("selection_state")
    assert_equal "highest_observed_version", chapter.fetch("selection_basis")
    assert_equal "legacy", by_path.fetch("research/chapter-packets/06-chapter-6-packet-v0.1.md").fetch("index_state")
    assert_equal "current", by_path.fetch("research/chapter-packets/06-chapter-6-packet-v0.2.md").fetch("index_state")
    assert_equal "ambiguous", by_path.fetch("manuscript/part-2/06-fixture.md").fetch("index_state")
  end

  def test_explicit_editorial_acceptance_selects_current_working_version
    Dir.mktmpdir do |directory|
      FileUtils.cp_r("#{FIXTURE_ROOT}/.", directory)
      path = File.join(directory, "research/chapter-packets/06-chapter-6-packet-v0.2.md")
      File.write(
        path,
        File.read(path, encoding: "UTF-8").sub(
          "status: draft_for_editorial_review",
          "status: accepted\neditorial_scope: accepted_current_working_version\npublication_status: not_final"
        ),
        encoding: "UTF-8"
      )

      result = PalmaKnowledgeOS::Scanner.new(directory).scan
      index = PalmaKnowledgeOS::IndexBuilder.new(result).build
      chapter = index.fetch("chapters").find { |item| item["canonical_id"] == "CHAPTER_06" }
      current = chapter.fetch("records").find { |record| record["index_state"] == "current" }

      assert_equal "explicit_editorial_acceptance", chapter.fetch("selection_basis")
      assert_equal "0.2", current.fetch("version")
      assert_equal "accepted_current_working_version", current.fetch("editorial_scope")
      assert_equal "not_final", current.fetch("publication_status")
    end
  end

  def test_catalog_distinguishes_current_and_legacy_metadata
    _builder, index = build

    assert index.dig("catalog", "current").any? { |record| record["canonical_id"] == "TASK_CODEX_9991" }
    assert index.dig("catalog", "legacy").any? { |record| record["canonical_id"] == "TASK_CLAUDE_9992" }
  end

  def test_rendering_is_byte_deterministic
    builder_one, index_one = build
    builder_two, index_two = build

    assert_equal JSON.pretty_generate(index_one), JSON.pretty_generate(index_two)
    assert_equal builder_one.render_markdown(index_one), builder_two.render_markdown(index_two)
  end

  def test_cli_generate_then_check_without_rewriting
    Dir.mktmpdir do |directory|
      command = [RbConfig.ruby, GENERATOR, "--root", FIXTURE_ROOT, "--output-dir", directory]
      _stdout, stderr, status = Open3.capture3(*command)
      assert status.success?, stderr

      json_path = File.join(directory, "repository-index.json")
      markdown_path = File.join(directory, "repository-index.md")
      before = [File.binread(json_path), File.binread(markdown_path)]

      _stdout, stderr, status = Open3.capture3(*command, "--check")
      assert status.success?, stderr
      after = [File.binread(json_path), File.binread(markdown_path)]

      assert_equal before, after
    end
  end

  def test_duplicate_highest_chapter_version_is_ambiguous
    Dir.mktmpdir do |directory|
      FileUtils.cp_r("#{FIXTURE_ROOT}/.", directory)
      File.write(
        File.join(directory, "research/chapter-packets/06-second-v0.2.md"),
        "# Duplicate\n\n```yaml\npacket_id: PKT-06-second\nchapter: Chapter 6\nversion: \"0.2\"\nstatus: draft_for_editorial_review\nowner: fixture\ncreated_date: \"2026-07-17\"\n```\n",
        encoding: "UTF-8"
      )

      result = PalmaKnowledgeOS::Scanner.new(directory).scan
      index = PalmaKnowledgeOS::IndexBuilder.new(result).build
      chapter = index.fetch("chapters").find { |item| item["canonical_id"] == "CHAPTER_06" }

      assert_equal "ambiguous", chapter.fetch("selection_state")
      assert_equal 2, chapter.fetch("records").count { |record| record["index_state"] == "ambiguous" && record["version"] == "0.2" }
    end
  end
end
