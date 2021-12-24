#!/bin/bash

./export.sh
cat ./docs/resume/index.html | wkhtmltopdf --outline-depth 2 --enable-local-file-access --enable-internal-links - ./docs/resume/resume.pdf
