---
layout: post
title: "Please, use hexadecimal instead of name"
tags: ['css']
---
Just a little note to ask you to use hexadecimal instead of name when you specify colours in your style.

Indeed, first of all, it's nicer when you want to change a colour from hexa to hexa than name to hexa.

And mostly, it's so much easier to change it in live when you use a debugger like [Firebug](https://getfirebug.com/). You just have to select your colour and use arrows from your keyboard to up and down the colour. So useful.

In order words:

Do not:

{% highlight css %}
.myElement {
    color: black;
}
{% endhighlight %}

Do:

{% highlight css %}
.myElement {
    color: #000000;
}
{% endhighlight %}

## Bonus

If you use the excellent editor called [Sublime Text](http://www.sublimetext.com/), I advise you this plugin: [ColorHighlighter](https://github.com/Monnoroch/ColorHighlighter). It allows you to see directly the colour when selected the css property.