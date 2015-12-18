import Ember from 'ember';

export default Ember.Controller.extend({
  zoom: 12,
  zoomEnd(e) {
    this.set('zoom', e.target.getZoom());
  }
});