#!/bin/bash

set -e

echo "y" | zola build --output-dir docs
cp -f ./CNAME ./docs/CNAME
#cp -f ./static/resume.pdf ./docs/resume.pdf
