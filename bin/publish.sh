#!/bin/sh
grunt
read -p "Press [Enter] key to continue..."
git commit -am "Source updated"
read -p "Press [Enter] key to continue..."
git checkout gh-pages
read -p "Press [Enter] key to continue..."
mv .gitignore .gitignore.tmp
read -p "Press [Enter] key to continue..."
git rm -rqf .
read -p "Press [Enter] key to continue..."
mv .gitignore.tmp .gitignore
read -p "Press [Enter] key to continue..."
cp -r build/ .
read -p "Press [Enter] key to continue..."
git add .
read -p "Press [Enter] key to continue..."
git rm .gitignore
read -p "Press [Enter] key to continue..."
git commit -m "updated"
read -p "Press [Enter] key to continue..."
git push -f
read -p "Press [Enter] key to continue..."
git checkout dev