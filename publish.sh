#!/bin/sh
grunt prod
git checkout gh-pages
mv .gitignore .gitignore.tmp
git rm -rq .
git rm $(git ls-files --deleted)
mv .gitignore.tmp .gitignore
cp -R ./build ./