#!/bin/bash

mv ./docs/CNAME .
mv ./docs/resume/resume.pdf .
cp ./docs/css/*css .

# TODO: do I need to delete this directory? Or is --cleanDestinationDir enough?
#rm -rf docs/
hugo --cleanDestinationDir --minify

mv ./CNAME ./docs/CNAME
mv ./resume.pdf ./docs/resume/resume.pdf

# We don't want to clobber any updated css with the same name, so let's move
# any files that don't already exist and then remove whatever's leftover
mv -n *css ./docs/css
rm *css
