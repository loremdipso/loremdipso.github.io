#!/usr/bin/bash

git reset $(git commit-tree "HEAD^{tree}" -m "Squashing all previous commits")
git push -f
