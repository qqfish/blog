#!/bin/sh

DATE=`date +"%Y-%m-%d"`
FILENAME="src/_posts/$DATE-FIXME.html"

echo '---
layout: post
title: "FIXME"
---
' > $FILENAME

echo $FILENAME