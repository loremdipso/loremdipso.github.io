#!/bin/bash

set -e

cd "${0%/*}/.."

./resume/publish.sh

./scripts/export.sh

# RIP in peace :'(
# cat ./docs/resume/index.html | wkhtmltopdf -T 20cm --print-media-type --outline-depth 2 --enable-local-file-access --enable-internal-links - ./static/temp.pdf
google-chrome --headless --no-pdf-header-footer --print-to-pdf=./static/temp.pdf ./docs/resume/index.html
ps2pdf ./static/temp.pdf ./static/resume.pdf
rm ./static/temp.pdf
cp -f ./static/resume.pdf ./docs/resume.pdf
