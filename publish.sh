#!/bin/sh
grunt prod
git checkout gh-pages
mv .gitignore .gitignore.tmp
git rm -rq .
mv .gitignore.tmp .gitignore
cp -R ./build ./