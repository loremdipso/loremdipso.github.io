#!/bin/bash

mv ./docs/CNAME .
mv ./docs/resume/resume.pdf .

# TODO: do I need to delete this directory? Or is --cleanDestinationDir enough?
#rm -rf docs/
hugo --cleanDestinationDir --minify

mv ./CNAME ./docs/CNAME
mv ./resume.pdf ./docs/resume/resume.pdf
