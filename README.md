# ionic-fullscreen

Library to click in an image and show an ionic modal with zoomable image in fullscreen. 

## Installation

Install depency via `bower`

```bash
$ bower install https://github.com/litekeymx/ionic-fullscreen --save
```

Add a `<link>` to your `index.html`:

```html
<link href="/bower_components/ionic-fullscreen/ionic-fullscreen.min.css" rel="stylesheet"/>
```

You can use `Sass` too, by adding the `@import' the `scss` file

```sass
@import "www/bower_components/ionic-fullscreen/ionic-fullscreen.scss";
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/ionic-fullscreen/ionic-fullscreen.min.js"></script>
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
MIT
