#!/usr/bin/env ruby
# frozen_string_literal: true

require "json"
require "optparse"
require "pathname"
require_relative "book_dashboard"
require_relative "palma_metadata"

options = {
  root: File.expand_path("..", __dir__),
  output: nil,
  check: false
}

OptionParser.new do |parser|
  parser.banner = "Usage: generate_book_dashboard.rb [--root PATH] [--output PATH] [--check]"
  parser.on("--root PATH", "Palma-method root") { |value| options[:root] = value }
  parser.on("--output PATH", "Dashboard path") { |value| options[:output] = value }
  parser.on("--check", "Compare expected bytes without writing") { options[:check] = true }
end.parse!

root = Pathname.new(options[:root]).expand_path
output = Pathname.new(options[:output] || root.join("BOOK_DASHBOARD.md")).expand_path
index_path = root.join("generated/repository-index.json")

abort "missing repository index: generated/repository-index.json" unless index_path.file?

index = JSON.parse(index_path.read(encoding: "UTF-8"))
validation = PalmaKnowledgeOS::Scanner.new(root).scan
abort "metadata validation failed with #{validation.error_count} error(s)" unless validation.error_count.zero?
unless validation.source_fingerprint == index["source_fingerprint"]
  abort "repository index is stale; regenerate generated/repository-index.json first"
end

units = PalmaBookDashboard::TableOfContents.new(root).load
abort "canonical table of contents must contain 23 manuscript units; found #{units.length}" unless units.length == 23

dates = PalmaBookDashboard::GitDates.new(root).load
content = PalmaBookDashboard::Builder.new(units: units, index: index, last_modified: dates).render

if options[:check]
  if output.file? && output.read(encoding: "UTF-8") == content
    puts "book dashboard is deterministic and up to date"
    exit 0
  end

  warn "out of date: #{output.basename}"
  exit 1
end

output.write(content, mode: "w", encoding: "UTF-8")
puts "wrote #{output.relative_path_from(root)}"
