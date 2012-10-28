#!/bin/sh

DATE=`date +"%Y-%m-%d"`
FILENAME="src/posts/$DATE-FIXME.html"

echo '---
layout: post
title: "FIXME"
---
' > $FILENAME

echo $FILENAME