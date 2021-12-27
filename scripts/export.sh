#!/bin/bash

mv ./docs/CNAME .
mv ./docs/resume/resume.pdf .
rm -rf docs/
hugo --cleanDestinationDir --minify
mv ./CNAME ./docs/CNAME
mv ./resume.pdf ./docs/resume/resume.pdf
