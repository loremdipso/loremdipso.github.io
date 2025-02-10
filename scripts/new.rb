#!/usr/bin/ruby
# frozen_string_literal: true

require 'erb'
require 'readline'

def main(_args)
  template = generate_template
  is_mini = readline_boolean('Is this a mini? (y/n): ')
  title = is_mini ? get_mini_title : custom_readline('Title of content (human readable): ')
  slug = fake_snakecase(title)
  description = is_mini ? "" : custom_readline('Description of content: ')
  tags = get_user_tags
  with_images = readline_boolean('Will there be images? (y/n): ')
  date = Time.now.strftime('%Y-%m-%d')

  result = template.result_with_hash(
    {
      title: title, slug: slug,
      description: description,
      tags: tags, date: date
    }
  )

  output_path = get_output_path(slug, with_images, is_mini)
  File.open(output_path, 'w') { |f| f.puts(result) }
  puts 'Done :)'
  exec("vim \"#{output_path}\"")
end

def get_mini_title()
  numbers = Dir['content/minis/*'].map{|e| File.basename(e, File.extname(e))}.filter{|e| e =~ /^mini-[0-9]+$/}.map{|e| e.split("-")[1].to_i}
  numbers.push(0)
  max = numbers.max
  "mini %02d" % (max+1)
end

def custom_readline(prompt)
  print prompt
  rv = gets
  exit if rv.nil?
  rv.strip
end

def fake_snakecase(text)
  text
    .downcase
    .delete('^ a-z0-9')
    .split(' ')
    .map(&:strip)
    .join('-')
    .gsub(/--/, '-')
end

def readline_boolean(prompt)
  loop do
    answer = custom_readline(prompt).downcase
    if answer == 'y'
      return true
    elsif answer == 'n'
      return false
    else
      puts 'ERROR: invalid input'
    end
  end
end

def generate_template
  ERB.new(
    File.read(File.join(File.dirname(__FILE__), '_template.md'))
    # 0,
    # "%<>"
  )
end

def get_user_tags
  existent_tags = get_existent_tags
  comp = proc { |s| existent_tags.grep(/^#{Regexp.escape(s)}/) }
  Readline.completion_append_character = ','
  Readline.completion_proc = comp
  p existent_tags
  user_tags = []
  while line = Readline.readline('Tags (comma-separated): ', true)
    break if line == ''

    line.split(',').map(&:strip).each do |p|
      user_tags.push(p) if user_tags.index(p).nil?
      existent_tags.delete(p)
    end
    puts ''
    p user_tags
  end
  Readline.completion_proc = nil
  puts ''
  user_tags
end

def get_existent_tags
  Dir['docs/tags/*'].keep_if { |f| File.directory?(f) }.map { |e| File.basename(e) }
end

def get_output_path(slug, use_assets_folder, is_mini)
  # TODO: deal with non-draft/numeric prefixes. For now just prefix with 'draft'
  # path = File.join(".", "content", "posts", "draft-%s" % slug)
  path = is_mini ? File.join('.', 'content', 'minis', slug) : File.join('.', 'content', 'posts', slug)
  if use_assets_folder
    Dir.mkdir(path)
    Dir.mkdir(File.join(path, 'assets'))
    path = File.join(path, 'index.md')
  else
    path += '.md'
  end
  path
end

if $PROGRAM_NAME == __FILE__
  Dir.chdir(File.join(File.dirname(__FILE__), '..')) do
    main(ARGV.dup)
  end
end
