---
layout: post
title: "High Definition Sprite with SASS and Compass"
tags: ['css', 'sass']
---

Last time, I wanted to create some sprites for high definition displays. Indeed, SVG or/and fonts are great to display icons but you can't do so many things with it. You're mostly limited by a ```text-shadow``` or some few effects, but you can't really do whatever you want and browser / operating systems don't render them equally.

So here's my trick to create a sprite with compass to high definition displays. Your images have to be x2 higher of the size they'll really be once on the high definition display.

{{% highlight css }}
    /* Put this file in your assets/stylesheets/ folder
     *
     * Example main.scss:
     * @import "compass";
     * @import "icons/*.png";
     * @include all-icons-sprites;
     *
     * @import "retina";
     * 1. if all the images in your icons/ folder are retina size:
     * @include retina-sprites($icons-sprites);
     *
     * 2. if only some of the images are retina size and they have a filename convention ex. x2-a.png, x2-b.png, x2-c.png
     * @include retina-sprites($icons-sprites, sprite-names(sprite-map("icons/x2-*.png")));
     *
     * 3. otherwise you can manually list each retina image
     * @include retina-sprites($icons-sprites, a b c);
     *
     * @import "lib";
     * @import "base";
     * ...
     *
     * Example equivalent of making background-position-x: 100%;
     * .icons-x2-accordion-arrow {
     *   @include retina-background-position($icons-sprites, x2-accordion-arrow, 100%);
     * }
     *
     * TODO:
     *     - Add "if" on dimensions when $icon-sprite-dimensions is false;
     */

    // helper function to return dimensions of sprite map for use with retina sprites
    @function retina-dimensions($map) {
      $path: sprite-path($map);
      @return image-width($path)/2 image-height($path)/2;
    }

    // retina version of http://compass-style.org/reference/compass/helpers/sprites/#sprite-position
    @function retina-position($map, $sprite, $offset-x: 0, $offset-y: 0) {
      $sprite-pos: sprite-position($map, $sprite);
      $x: nth($sprite-pos, 1);
      $y: nth($sprite-pos, 2);

      // emulate sprite-background-position()
      $retina-x: $offset-x;
      $retina-y: $offset-y;
      @if unit($offset-x) != "%" {
        $retina-x: $x/2 + $offset-x;
      }
      @if unit($offset-y) != "%" {
        $retina-y: $y/2 + $offset-y;
      }
      @return $retina-x $retina-y;
    }

    // retina version of http://compass-style.org/reference/compass/helpers/sprites/#sprite
    @function retina-sprite($map, $sprite, $offset-x: 0, $offset-y: 0) {
      @return $map retina-position($map, $sprite, $offset-x, $offset-y);
    }

    // retina version of http://compass-style.org/reference/compass/utilities/sprites/base/#mixin-sprite-background-position
    @mixin retina-background-position($map, $sprite, $offset-x: 0, $offset-y: 0) {
      background-position: retina-position($map, $sprite, $offset-x, $offset-y);
    }

    // adds the appropriate background-position and background-size styles to retina-ize sprites
    // usage example: @include retina-sprites($icons-sprites);
    // usage example: @include retina-sprites($icons-sprites, icon1 icon2 icon3);
    @mixin retina-sprites($map, $sprites: sprite-names($map)) {
      $sprite-classes: ();

      // calculate width and height of sprite map
      @each $sprite in $sprites {
        $sprite-classes: join($sprite-classes, #{"."}sprite-map-name($map)-$sprite, comma);

        // adjust sprite's background position
        .#{sprite-map-name($map)-$sprite} {
          @include retina-background-position($map, $sprite);

          height: image-height(sprite-file($map, $sprite)) / 2;
          width: image-width(sprite-file($map, $sprite)) / 2;
        }
      }

      #{$sprite-classes} {
        @include background-size(retina-dimensions($map));
      }
    }
{{% endhighlight }}

Enjoy.

Soon, I'll create a repo with all my sass/compass recipes.