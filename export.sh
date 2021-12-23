#!/bin/bash

rm -rf docs/
hugo --cleanDestinationDir --minify
cat ./docs/resume/index.html | wkhtmltopdf --outline-depth 2 --enable-local-file-access --enable-internal-links - ./docs/resume/resume.pdf
