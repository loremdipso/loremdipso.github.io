#!/usr/bin/ruby
require 'erb'

def readline(prompt)
  print prompt
  rv = gets
  exit if rv == nil
  return rv.strip
end

def readline_boolean(prompt)
  while true
    answer = readline(prompt).downcase
    if answer == "y"
      return true
    elsif answer == "n"
      return false
    else
      puts "ERROR: invalid input"
    end
  end
end

def get_template()
  template = ERB.new(
    File.read(File.join(File.dirname(__FILE__), "_template.md")),
    #0,
    #"%<>"
  )
  return template
end

def main(args)
  template = get_template()
  title = readline("Title of content: ")
  slug = readline("Content slug (snake-case): ")
  description = readline("Description of content: ")
  tags = readline("Tags (comma-separated): ").split(",").map(&:strip)
  with_images = readline_boolean("Will there be images? (y/n): ")
  date = Time.now.strftime("%Y-%m-%d")

  result = template.result_with_hash({
    title: title,
    slug: slug,
    description: description,
    tags: tags,
    date: date,
  })

  p result
end

def get_filename(slug)
  p Dir['./content/posts/*']
end

filename = get_filename("some-slug")
#main(ARGV.dup)
