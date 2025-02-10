#!/usr/bin/bash

set -e

./scripts/export.sh
git add .
git commit -m "Publishing"
git push

