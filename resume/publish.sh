#!/usr/bin/bash
set -e

cd "${0%/*}/resume_markdown_to_toml"
cargo run -- --input ../resume.md --output ../resume.toml
