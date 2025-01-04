#!/usr/bin/bash

cd "${0%/*}"
watchexec --restart -c -w src/ -w Cargo.toml -w *md "cargo run && touch ../config.toml"
