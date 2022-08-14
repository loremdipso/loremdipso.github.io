#!/bin/bash

mv ./docs/CNAME .
echo "y" | zola build --output-dir docs

mv ./CNAME ./docs/CNAME
cp -f ./static/resume.pdf ./docs/resume/resume.pdf
