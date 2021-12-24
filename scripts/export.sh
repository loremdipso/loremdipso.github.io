#!/bin/bash

mv ./docs/CNAME .
rm -rf docs/
hugo --cleanDestinationDir --minify
mv ./CNAME ./docs/CNAME
