#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn fix && git add .
