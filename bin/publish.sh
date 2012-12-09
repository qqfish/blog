#!/bin/sh
grunt
echo -e "\033[36m ~> site built"
git commit -am "Source updated"
git branch -D gh-pages
echo -e "\033[36m ~> gh-pages deleted"
git checkout -b gh-pages
echo -e "\033[36m ~> gh-pages created."
mv .gitignore .gitignore.tmp
git rm -rqf .
echo -e "\033[36m ~> git files deleted"
mv .gitignore.tmp .gitignore
cp -r build/ .
echo -e "\033[36m ~> copy site"
git add .
git rm .gitignore
git commit -m "Site updated"
git push -f
git checkout dev
echo -e "\033[36m ~> everything is done"