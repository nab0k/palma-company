# frozen_string_literal: true

require "json"
require "minitest/autorun"
require "open3"
require "rbconfig"
require "tmpdir"
require_relative "../scripts/book_dashboard"

class BookDashboardTest < Minitest::Test
  PROJECT_ROOT = File.expand_path("..", __dir__)
  GENERATOR = File.expand_path("../scripts/generate_book_dashboard.rb", __dir__)

  def unit(id, number, title)
    PalmaBookDashboard::Unit.new(
      canonical_id: id,
      part: "Fixture",
      number: number,
      title: title,
      path: "manuscript/#{id.downcase}.md"
    )
  end

  def fixture_units
    [
      unit("CHAPTER_00", "Introduction", "Current"),
      unit("CHAPTER_01", "1", "Legacy"),
      unit("CHAPTER_02", "2", "Ambiguous"),
      unit("CHAPTER_03", "3", "Revision"),
      unit("CHAPTER_99", "Conclusion", "Missing")
    ]
  end

  def fixture_index
    {
      "summary" => {"current" => 2, "legacy" => 1, "ambiguous" => 2},
      "chapters" => [
        {
          "canonical_id" => "CHAPTER_00",
          "selection_state" => "current",
          "records" => [
            packet("CHAPTER_00", "0.2", "accepted", "current"),
            manuscript("CHAPTER_00")
          ]
        },
        {
          "canonical_id" => "CHAPTER_01",
          "selection_state" => "legacy",
          "records" => [packet("CHAPTER_01", "0.1", "draft", "legacy")]
        },
        {
          "canonical_id" => "CHAPTER_02",
          "selection_state" => "ambiguous",
          "records" => [manuscript("CHAPTER_02")]
        },
        {
          "canonical_id" => "CHAPTER_03",
          "selection_state" => "current",
          "records" => [
            packet("CHAPTER_03", "0.3", "revision", "current"),
            manuscript("CHAPTER_03")
          ]
        }
      ]
    }
  end

  def packet(id, version, status, index_state)
    {
      "id" => "PKT-#{id}",
      "canonical_id" => id,
      "type" => "chapter",
      "path" => "research/chapter-packets/#{id.downcase}-v#{version}.md",
      "version" => version,
      "status" => status,
      "record_state" => "legacy",
      "index_state" => index_state
    }
  end

  def manuscript(id)
    {
      "id" => "MANUSCRIPT_#{id}",
      "canonical_id" => id,
      "type" => "chapter",
      "path" => "manuscript/#{id.downcase}.md",
      "status" => "unknown",
      "record_state" => "legacy",
      "index_state" => "ambiguous"
    }
  end

  def builder
    PalmaBookDashboard::Builder.new(
      units: fixture_units,
      index: fixture_index,
      last_modified: {"manuscript/chapter_00.md" => "2026-07-17"}
    )
  end

  def test_canonical_toc_contains_all_23_units
    units = PalmaBookDashboard::TableOfContents.new(PROJECT_ROOT).load

    assert_equal 23, units.length
    assert_equal ["CHAPTER_00", "The Missing Response"], [units.first.canonical_id, units.first.title]
    assert_equal ["CHAPTER_99", "The Open Palm"], [units.last.canonical_id, units.last.title]
  end

  def test_current_legacy_ambiguous_and_missing_are_distinct
    rows = builder.data.fetch("rows").to_h { |row| [row["canonical_id"], row] }

    assert_equal "current", rows.fetch("CHAPTER_00").fetch("repository_status")
    assert_equal "legacy", rows.fetch("CHAPTER_01").fetch("repository_status")
    assert_equal "ambiguous", rows.fetch("CHAPTER_02").fetch("repository_status")
    assert_equal "missing", rows.fetch("CHAPTER_99").fetch("repository_status")
    assert_equal "unknown", rows.fetch("CHAPTER_02").fetch("current_version")
  end

  def test_summary_uses_only_explicit_editorial_status
    summary = builder.data.fetch("summary")

    assert_equal 5, summary.fetch("total_manuscript_units")
    assert_equal 3, summary.fetch("working_packets")
    assert_equal 1, summary.fetch("editorially_accepted")
    assert_equal 1, summary.fetch("under_revision")
    assert_equal 2, summary.fetch("not_started")
    assert_equal 60.0, summary.fetch("packet_coverage_percentage")
  end

  def test_ambiguity_report_explains_unversioned_manuscript
    ambiguity = builder.data.fetch("ambiguities").first

    assert_equal "CHAPTER_02", ambiguity.fetch("canonical_id")
    assert_match(/cannot be declared current/, ambiguity.fetch("reason"))
    assert_equal "unknown", ambiguity.fetch("files").first.fetch("version")
  end

  def test_render_is_byte_deterministic
    assert_equal builder.render, builder.render
  end

  def test_cli_generate_then_check_does_not_rewrite
    Dir.mktmpdir do |directory|
      output = File.join(directory, "BOOK_DASHBOARD.md")
      command = [RbConfig.ruby, GENERATOR, "--root", PROJECT_ROOT, "--output", output]
      _stdout, stderr, status = Open3.capture3(*command)
      assert status.success?, stderr
      before = File.binread(output)

      _stdout, stderr, status = Open3.capture3(*command, "--check")
      assert status.success?, stderr
      assert_equal before, File.binread(output)
    end
  end
end
