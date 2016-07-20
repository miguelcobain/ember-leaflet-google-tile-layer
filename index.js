/* jshint node: true */
'use strict';
var VersionChecker = require('ember-cli-version-checker');

module.exports = {
  name: 'ember-leaflet-google-tile-layer',
  included: function(app) {
    var checker = new VersionChecker(this);
    var dep = checker.for('leaflet', 'bower');

    // import correct javascript based on leaflet version
    if (dep.isAbove('0.7.7')) {
      app.import('vendor/current/Google.js');
    } else {
      app.import('vendor/0.7.7/Google.js');
    }
  },

  contentFor: function(type, config) {
    if (type === 'head') {
      var config = config.googleLeaflet || {};
      if (config.include !== false) {
        var apiKey = config.apiKey;
        var keyParam = apiKey ? '?key=' + apiKey : '';
        return '<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js' + keyParam + '"></script>';
      }
    }
  }
};
