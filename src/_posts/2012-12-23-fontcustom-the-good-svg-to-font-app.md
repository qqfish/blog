---
layout: post
title: "Fontcustom, the good svg-to-font app"
tags: ['svg', 'fonts']
---
Recently at work, I've created my first new web application for mobiles. It was the first time I had to deal with html and mobiles to create something like a native app.

So as first step on mobile world, I did a lot of mistakes. If I tell you that, it's because [fontcustom](http://fontcustom.com/) was the solution of one of these mistakes.

Indeed, on a mobile, you can't use regular images like on desktop, the resolution of the screen is like 2 times higher (See Retina from Apple for example) so a classic image will be really ugly. You can also use the trick (mostly in fallback) that you take a 2x image and reduce it via html/css in order to have something presentable (there're lots of articles about it on internet like this [one](http://www.toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script)) but I wanted to try it in SVG. I think it's really the format you should use when you create icons and you have differents resolutions. As it's vectorial, you never have a degression of your image depending to how you manage its size.

See there for instance, it's an image where I zoom it like 4 times. At your left, you have a classic png image and at your right, you have a svg one.

![SVG vs PNG]({{site.baseurl}}/content/img/svg-vs-png.jpg)

The png one is sooo disgraceful contrary to the svg one.

As I had all my icons in png (and sprite), it was time to try svg. But I really wanted to have the same performance that png in sprite where I have just one request to get all my icons. That's why I choose to create a font especially for icons. This is where [fontcustom](http://fontcustom.com/) is my hero.

[Fontcustom](http://fontcustom.com/) based on fontforge allows you to create from a collection of svg a font where you will have all your icons in one file.

Imagine you have:

    svg/
        - tag.svg
        - user.svg
        - cross.svg


[Fontcustom](http://fontcustom.com/) will create so:

    - fontcustom-*cachebuster*.eot
    - fontcustom-*cachebuster*.svg
    - fontcustom-*cachebuster*.tff
    - fontcustom-*cachebuster*.woff
    - fontcustom.css

In order to support all browsers, you will have the font in 4 files, plus a css to use it.

So now, you can have lots of vectorial icons in just one request. To be honest, this blog uses it to display user icon and tag icon just under the article title.

### Usage

In order to use, just do

    <span class="icon-user"></span>

You will get a great vectorial icon added via ``` icon-user:before ```.

If you use [SASS](http://sass-lang.com/) and like me you dislike to add useless classes in your html, I advise you to do this trick:

You define a placeholder which will be used by any classes which require an icon.

{% highlight css %}
%icon {
    &:before {
        font-family: "fontcustom";
        font-weight: normal;
        font-style: normal;
        text-decoration: inherit;
    }
}
{% endhighlight %}

And you extend your class by your placeholder, plus the class creates especially for the icon you add as svg.

{% highlight css %}
.author {
    @extend %icon, .icon-user;
}
{% endhighlight %}

Clean, fast, and beautiful.

### Installation

Installation on __MacOSX__ is really simple:

    $ brew install fontforge eot-utils ttfautohint
    $ gem install fontcustom

On __Linux__, a bit more complex:

    $ sudo apt-get install fontforge eot-utils ttfautohint
    $ wget http://people.mozilla.com/~jkew/woff/woff-code-latest.zip
    $ unzip woff-code-latest.zip -d sfnt2woff && cd sfnt2woff && make && sudo mv sfnt2woff /usr/local/bin/
    $ gem install fontcustom

On __Debian__ (and so Ubuntu too), may prefer first ``` $ sudo apt-get install ruby1.*.*-dev. ```

Enjoy.
