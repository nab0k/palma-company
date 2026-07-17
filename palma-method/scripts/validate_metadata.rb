#!/usr/bin/env ruby
# frozen_string_literal: true

require "json"
require "optparse"
require_relative "palma_metadata"

options = {
  root: File.expand_path("..", __dir__),
  format: "text"
}

OptionParser.new do |parser|
  parser.banner = "Usage: validate_metadata.rb [--root PATH] [--format text|json]"
  parser.on("--root PATH", "Palma-method root") { |value| options[:root] = value }
  parser.on("--format FORMAT", %w[text json], "Output format") { |value| options[:format] = value }
end.parse!

result = PalmaKnowledgeOS::Scanner.new(options[:root]).scan

if options[:format] == "json"
  puts JSON.pretty_generate(result.report)
else
  result.sorted_diagnostics.each do |item|
    puts "#{item.severity} #{item.rule_id} #{item.path}:#{item.line} #{item.message}"
  end
  puts [
    "status=#{result.error_count.zero? ? 'pass' : 'fail'}",
    "records=#{result.records.length}",
    "errors=#{result.error_count}",
    "warnings=#{result.warning_count}",
    "info=#{result.info_count}",
    "mode=legacy_warning",
    "read_only=true",
    "source_fingerprint=#{result.source_fingerprint}"
  ].join(" ")
end

exit(result.error_count.zero? ? 0 : 1)
