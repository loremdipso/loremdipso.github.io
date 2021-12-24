#!/usr/bin/env ruby
require 'fileutils'


def main(args)
	args.each do |image|
		deal_with_image(image)
	end
end

def deal_with_image(image)
	exts = ['.webp', '.avif']
	orig_ext = File.extname(image)
	exts.push(orig_ext) unless exts.include?(orig_ext)

	# keep original around just in case
	FileUtils.cp(image, image.sub(/#{orig_ext}$/, ".original"))

	exts.each do |ext|
		filename = image.sub(/#{orig_ext}$/, ext)
		puts filename
		# TODO: what should this actually be?
		puts `convert "#{image}" -strip -resize "900x900>" "#{filename}"`
		#puts `convert "#{image}" -strip -resize "500x500>" "#{filename}"`
	end
end


main(ARGV.dup)

