#!/usr/bin/ruby
# frozen_string_literal: true

require 'json'
require 'erb'

BOOTSTRAP_TEMPLATE = ERB.new <<~EOF
  import <%= title_name %> from "./demos/<%= title_name %>.svelte";

  const app = new <%= title_name %>({
  	target: document.getElementById("<%= name %>"),
  });

  export default app;
EOF

DEMO_TEMPLATE = ERB.new <<~EOF
  <script lang="ts">
  </script>

  <main>
  	TODO
  </main>
EOF

def new_demo(name)
  usage unless valid_name(name)
  name = name.downcase

  demos_filename = 'demos.json'
  Dir.chdir(File.dirname(__FILE__)) do
    demos = JSON.parse(File.read(demos_filename))
    # unless demos[name].nil?
    #   warn("ERROR: #{name} demo already exits. Exiting")
    #   exit(false)
    # end

    demos[name] = create_bootstrap(name)
    create_demo(name)
    File.open(demos_filename, 'w') { |f| f.print(JSON.dump(demos)) }
    puts 'Done :)'
  end
end

def create_demo(name)
  demo_filename = "./src/demos/#{get_title_name(name)}.svelte"
  File.open(demo_filename, 'w') do |f|
    f.puts(DEMO_TEMPLATE.result_with_hash({}))
  end

  demo_filename
end

def create_bootstrap(name)
  hash = {
    name: name,
    title_name: get_title_name(name)
  }

  bootstrap_filename = "./src/#{name}.ts"
  File.open(bootstrap_filename, 'w') do |f|
    f.puts(BOOTSTRAP_TEMPLATE.result_with_hash(hash))
  end

  bootstrap_filename
end

def get_title_name(name)
  pieces = name.split(/[_-]/)
  pieces.map(&:capitalize).join
end

def valid_name(name)
  return false if name.nil? || name.empty?

  true
end

def usage
  puts 'Usage: ./me {demo name}'
  exit(false)
end

new_demo(ARGV[0]) if $PROGRAM_NAME == __FILE__
