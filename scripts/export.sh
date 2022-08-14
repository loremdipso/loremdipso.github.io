#!/bin/bash

echo "y" | zola build --output-dir docs
rm ./docs/resume.pdf

cp -f ./CNAME ./docs/CNAME
cp -f ./static/resume.pdf ./docs/resume/resume.pdf
