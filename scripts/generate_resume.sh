#!/bin/bash

./scripts/export.sh
cat ./docs/resume/index.html | wkhtmltopdf --outline-depth 2 --enable-local-file-access --enable-internal-links - ./static/resume.pdf
cp -f ./static/resume.pdf ./docs/resume/resume.pdf
