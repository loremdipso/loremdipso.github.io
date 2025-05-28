#!/bin/bash

set -e
cd "${0%/*}/.."
firefox --new-tab http://127.0.0.1:1111
zola serve
