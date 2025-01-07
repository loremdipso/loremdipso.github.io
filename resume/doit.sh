#!/usr/bin/bash

set -e
cargo run
../scripts/generate_resume.sh
