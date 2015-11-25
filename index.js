/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-leaflet-google-tile-layer',
  included: function(app) {
   //import javascript
   app.import(app.bowerDirectory + '/leaflet-plugins/layer/tile/Google.js');
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
