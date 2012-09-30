Jekyll Bootstrap
================

[Jekyll](https://github.com/mojombo/jekyll) Bootstrap is an already-done Jekyll structure featuring:

- HTML 5
- [SASS](http://sass-lang.com/) / [Compass](http://compass-style.org/)

## Requirements

Before anything, you have to install sass, compass and jekyll in order to work correctly.

```
$ gem install compass
$ gem install jekyll
```

## Usage

If you want to start a server with autocompiling:

```
$ ./start.sh
```

You will get a local server accessible via : ```http://localhost:4000``` (The website will be updated everytime you modify a file).

If you prefer to watch every modification:

```
$ ./watch.sh
```

And if you prefer just to compile your website yourself, use this command:

```
$ ./compile.sh
```

In any case, you'll get your website in ```_site```.
