import BaseLayer from 'ember-leaflet/components/base-layer';

export default BaseLayer.extend({

  leafletRequiredOptions: [
    'type' // Possible types: SATELLITE, ROADMAP, HYBRID, TERRAIN
  ],

  leafletOptions: [
    'mapOptions', 'attribution', 'opacity', 'maxZoom'
  ],

  leafletEvents: [
    'load'
  ],

  leafletProperties: [
    'opacity'
  ],

  createLayer() {
    return new this.L.Google(...this.get('requiredOptions'), this.get('options'));
  }
});
