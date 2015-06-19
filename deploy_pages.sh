#!/bin/bash
BRANCH="$(git rev-parse --abbrev-ref HEAD)"
lein doc
lein clean && lein cljsbuild once
git checkout gh-pages
git pull origin gh-pages
git add doc/
git add examples/
git commit -m "Update Github Pages."
git push origin gh-pages
git checkout $BRANCH