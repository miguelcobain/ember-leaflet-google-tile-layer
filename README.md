# ember-leaflet-google-tile-layer

This is addon that extends [ember-leaflet](http://www.ember-leaflet.com/) 2.0. It adds a `{{google-tile-layer}}` component that displays google tile layers.
This uses [this leaflet extension](https://github.com/shramov/leaflet-plugins/blob/master/layer%2Ftile%2FGoogle.js) to accomplish that. It also automatically adds google maps script to your `<head>` (see Installation section below).

Note that this approach **isn't** using google tile layers directly, as the violates google's terms. Instead, it wraps the google maps API, and proxies leaflet inputs to it. At any rate, this addon just wraps @shramov's implementation. It has a very reasonable performance, but only use this if you really want Google's tiles.

## Usage

```hbs
{{#leaflet-map lat=51.512983 lng=-0.138289 zoom=12}}
  {{google-tile-layer type="ROADMAP" opacity=0.9}}
{{/leaflet-map}}
```

Allowed types are `SATELLITE`, `ROADMAP`, `HYBRID` and `TERRAIN`.
Only bound property is `opacity`. Supports `onLoad` action that corresponds to `tilesloaded` google maps event.

## Installation

Run:
```bash
ember install ember-leaflet-google-tile-layer
```

Google's javascript library will be automatically referenced inside `<head>`. To use your API key, specify it in your application configuration in `config/environment.js`:

```javascript
var ENV = {
  // ...
  googleLeaflet: {
    apiKey: 'API-KEY-HERE'
  },
  // ...
};
```

If for some reason you want to prevent this addon from adding the script tag (e.g another library already does it), just specify:

```javascript
var ENV = {
  // ...
  googleLeaflet: {
    include: false
  },
  // ...
};
```

### Content Security Policy

Google Maps uses many resources from Google's servers, so the URLs to them have to be white listed. You can set this by adding to the Content Security Policy defined in `config/environment.js` like so:

```js
ENV.contentSecurityPolicy = {
  'default-src': "'none'",
  'script-src': "'self' 'unsafe-eval' *.googleapis.com",
  'font-src': "'self' fonts.gstatic.com",
  'img-src': "'self' data: *.googleapis.com maps.gstatic.com *.gstatic.com",
  'style-src': "'self' 'unsafe-inline' *.googleapis.com"
},
```

You can find out more information on the CSP addon page [here](https://github.com/rwjblue/ember-cli-content-security-policy#ember-cli-content-security-policy).

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
