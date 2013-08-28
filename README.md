veRepo - SASS Library

======

## About

veRepo is a SASS library of modules and mixins for robust and maintainable front-end development using SASS. Most of the modular items/objects in this repo will work by just adding 1 class name to the html element you desire to style (though there are some exceptions), for example:

```scss
.button{
	@include button(#fff, #09f, 0);
}
```

```html
<button class="button">
```

## SCSS to SASS

For the SASS syntax lovers or the SCSS syntax haters, you can use `sass-convert` to convert the scss files to sass. Later on I might write a script to automate it but currently it doesn't seem wise to develop a tool which will most probably be rewriten again due to this repository's current state (alpha phase).

## Guide / Examples

	#TODO

## Documentation

### To generate the docs

To generate the docs for this library you need to have the sassdoc gem installed and then while being inside the verepo, type:

	sassdoc -d ./docs -n veRepo

### To view the docs

To view the docs you need to serve them in an http server. One of the fastest ways to do that is via python's httpserver:

	cd docs
	python -m http.server

## Contribution Guidelines

[CONTRIBUTE.md](CONTRIBUTE.md)

## License

	The MIT License (MIT)

	Copyright (c) 2013 Adonis K.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.

#Credits

The `CONTRIBUTE.md` file of this project is a slightly modified copy `CONTRIBUTE.md` file from the normalize.css project.

	#TODO add more
