#!/bin/bash

cd "${0%/*}/.."
./scripts/export.sh
cat ./docs/resume/index.html | wkhtmltopdf --print-media-type --outline-depth 2 --enable-local-file-access --enable-internal-links - ./static/temp.pdf
ps2pdf ./static/temp.pdf ./static/resume.pdf
rm ./static/temp.pdf
cp -f ./static/resume.pdf ./docs/resume.pdf
