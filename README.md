# ionic-fullscreen

Library to click in an image and show an ionic modal with zoomable image in fullscreen. 

## Installation

Install depency via `bower`

```bash
$ bower install https://github.com/litekeymx/ionic-fullscreen.git --save
```

Add a `<link>` to your `index.html`:

```html
<link href="bower_components/ionic-fullscreen/ionic-fullscreen.min.css" rel="stylesheet"/>
```

You can use `Sass` too, by adding the `@import' the `scss` file

```sass
@import "www/bower_components/ionic-fullscreen/ionic-fullscreen.scss";
```

Add a `<script>` to your `index.html`:

```html
<script src="bower_components/ionic-fullscreen/ionic-fullscreen.min.js"></script>
```

Then add `ionic-fullscreen` as a dependency for your app:

```javascript
angular.module('myApp', ['ionic-fullscreen']);
```

You need to enable `jsScrolling` in for Ionic

```javascript
.config(function($ionicConfigProvider) {
    
    $ionicConfigProvider.scrolling.jsScrolling(true);

})
```

## Usage

Put the angular directive only in html tag `<img/>`

```html
<img fullscreen href="http://www.gravatar.com/avatar/0fad2d79a63c8e6ef96d81cd4f654314?s=500"/>
```

## Bugs and issues

Please file any issues and bugs in our main repository at [litekeymx/ionic-fullscreen](https://github.com/litekeymx/ionic-fullscreen/issues).

## License

The MIT License (MIT)

Copyright (c) 2016 LKMX Software Development S de RL de CV

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
