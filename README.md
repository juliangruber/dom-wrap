
# dom-wrap

Make dom elements easier to work with.

## Usage

```js
var wrap = require('dom-wrap');

var dom = wrap(document.querySelector('#example'));

// insert dom
dom.appendTo(document.body);

// remove dom
dom.remove();

// handle links
dom.on('click', function (href) {
  console.log('clicked: ' + href);
});

// hide & show
dom.hide();
dom.show();

// find children
dom.find('#foo');
dom.findAll('.bar');

// do something with the underlying dom
dom.dom./*...*/
```

## API

All methods are chainable.

### wrap(element)

Returns a new `dom-wrap`.

### wrap#on('click', fn)

Emitted whenever a relative link is clicked, instead of leading away.

### wrap#appendTo(el)

Add dom as a child to `el`.

### wrap#remove()

Remove the wrapped dom from the page.

### wrap#show()

Show the dom.

### wrap#hide()

Hide the dom.

### wrap#find(selector), wrap#findAll(selector)

Uses `querySelector` / `querySelectorAll`.

### wrap#dom

The underlying dom.

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install dom-wrap
```

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
