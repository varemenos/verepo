veRepo - SASS Library

---

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

---

## Documentation

### How to use veRepo

Assuming that your current file structure looks like this:

	css
	└── style.scss
	├── verepo
	│   ├── generic
	│   │   ├── _*.scss
	│   └── modules
	│       ├── _*.scss

Where `style.scss` is the main stylesheet of your project and `verepo` is the verepo library folder. Now all you have to do is to import the parts of verepo you want to use inside of style.scss and then use them with `include`.

__example #1__

```scss
@import "verepo/generic/_box-sizing";
@import "verepo/generic/_background-clip";
```

And then inside a declaration block, include the imported items, for example:

```scss
.aClass{
	@include box-sizing(border-box);
	@include background-clip(padding-box);
}
```

which will be processed into the following:

```css
.aClass{
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-background-clip: padding-box;
	-moz-background-clip: padding-box;
	background-clip: padding-box;
}
```

__example #2__

```scss
@import "verepo/modules/_triangle";
@import "verepo/modules/_button";
```

And then inside a declaration block, include the imported items, for example:

```scss
.triangle-topright{
	@include triangle(30px, #0099ff, top right);
}

.blue-flat-button{
	@include button(#fff, #09f, 0);
}
```

```css
.triangle-topright {
	content: "";
	display: inline-block;
	width: 0;
	height: 0;
	border: solid 30px;
	border-color: #0099ff #0099ff transparent transparent;
}

.blue-flat-button {
	position: relative;
	display: inline-block;
	padding: 0.5em 1em;
	color: white;
	text-decoration: none;
	background-color: #0099ff;
	border: 1px solid #007acc;
	-webkit-border-radius: 0;
	-moz-border-radius: 0;
	border-radius: 0;
	-webkit-background-clip: padding-box;
	-moz-background-clip: padding-box;
	background-clip: padding-box;
	-webkit-transition: 150ms ease-in-out background-color, 150ms ease-in-out box-shadow;
	-moz-transition: 150ms ease-in-out background-color, 150ms ease-in-out box-shadow;
	-o-transition: 150ms ease-in-out background-color, 150ms ease-in-out box-shadow;
	-ms-transition: 150ms ease-in-out background-color, 150ms ease-in-out box-shadow;
	transition: 150ms ease-in-out background-color, 150ms ease-in-out box-shadow;
}

.blue-flat-button:hover, .blue-flat-button:focus {
	cursor: pointer;
	background-color: #4db8ff;
}

.blue-flat-button:active {
	cursor: pointer;
	-webkit-box-shadow: 0 0 3px #0099ff, 0 0 0.5em rgba(0, 0, 0, 0.25) inset;
	-moz-box-shadow: 0 0 3px #0099ff, 0 0 0.5em rgba(0, 0, 0, 0.25) inset;
	box-shadow: 0 0 3px #0099ff, 0 0 0.5em rgba(0, 0, 0, 0.25) inset;
}
```

### Live

Visit [this link](http://varemenos.github.io/verepo/docs/) to read the online version, or follow the next steps to get a local version:

1. To generate the docs for this library you need to have the sassdoc gem installed and then while being inside the verepo, type: `sassdoc -d ./docs -n veRepo`

2. To view the docs you need to serve them in an http server. One of the fastest ways to do that is via python's httpserver: `cd docs` and then `python -m http.server`

---

## Guides

### Grunt.js

For grunt to start working you need to run `npm install --save-dev` so that npm can install all the dependencies then you can now use grunt.js. After that while being in the root directory of the repository, you can perform one of these tasks:

1. `grunt` to compile the docs (it only runs once, if you want a watch-like task, using 3.)
2. `grunt shell` same as 1.
3. `grunt watch` to watch any changes you do to the .scss files which will automatically regenerate the docs
4. `grunt connect` to initiate a simple http server at http://localhost:8080 which will server a local viewer for the docs

to stop the tasks, you need to press `CTRL` + `C`

### Bower

veRepo is now in the bower package directory and you can install it by simply running this command:

	bower install verepo

### SCSS to SASS

For the SASS syntax lovers or the SCSS syntax haters, you can use `sass-convert` to convert the scss files to sass. Later on I might write a script to automate it but currently it doesn't seem wise to develop a tool which will most probably be rewriten again due to this repository's current state (alpha phase).

### v1.X.X to v2.X.X

Currently the only differences between v1 and v2 are:

* the name of the library folder was renamed from `lib` to `verepo` to avoid getting folders mixed due to it's generic name.
* In the past  if only included `_base`, you now need to import `_normalize` as well because it's no longer imported inside `_base`.
* flex's syntax was changed

---

## Contribution Guidelines

[CONTRIBUTE.md](CONTRIBUTE.md)

---

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

---

## Credits

The `CONTRIBUTE.md` file of this project is a slightly modified copy `CONTRIBUTE.md` file from the normalize.css project.

	#TODO add more
