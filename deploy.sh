#!/usr/bin/env sh
set -e
npm run build
cd build
git init
git add -A
git commit -m 'bash_update'
git push -f git@github.com:TimSpan/JavaDocs.git main:pages
cd -