#!/usr/bin/bash

cd "${0%/*}"
watchexec --restart -c -w ../themes -w src/ -w ../scripts/generate_resume.sh -w Cargo.toml -w *md -w ../themes/slender/sass/resume.scss --poll 1s ./doit.sh
