#!/usr/bin/ruby
# NOTE: probably this doesn't matter?

Dir.chdir("static/processed_images/") do
  puts "Before:"
  puts `du -h .`
  Dir['*'].each do |f|
    `convert -strip "#{f}" "#{f}"`
  end
  puts "After:"
  puts `du -h .`
end
