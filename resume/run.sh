#!/usr/bin/bash
set -e

cd "${0%/*}/resume_markdown_to_toml"
cargo run -- --input ../resume.md --output ./dist/resume.html
cd dist
google-chrome --new-tab 127.0.0.1:8000/resume.html &
python3 -m http.server -d .
