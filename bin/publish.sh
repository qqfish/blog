#!/bin/sh
grunt
git co gh-pages
git merge dev --no-edit
mv .gitignore .gitignore.tmp
git rm -rqf .
mv .gitignore.tmp .gitignore
cp -r build/ .
git add .
git rm .gitignore
git commit -m "updated"
git push -f
git co dev