import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import GoogleTileLayerComponent from 'ember-leaflet-google-tile-layer/components/google-tile-layer';
const { run } = Ember;

let googleTilelayer;

moduleForComponent('google-tile-layer', 'Integration | Component | google tile layer', {
  integration: true,
  beforeEach() {
    this.register('component:google-tile-layer', GoogleTileLayerComponent.extend({
      init() {
        this._super(...arguments);
        googleTilelayer = this;
      }
    }));
  }
});

test('map type is correctly set', function(assert) {

  this.render(hbs`
    {{#leaflet-map lat=51.512983 lng=-0.138289 zoom=12}}
      {{google-tile-layer type="TERRAIN"}}
    {{/leaflet-map}}
  `);

  // pre-conditions
  assert.equal(googleTilelayer._layer._type, 'TERRAIN');

});

test('opacity init and change works', function(assert) {

  this.set('opacity', 0.7);

  this.render(hbs`
    {{#leaflet-map lat=51.512983 lng=-0.138289 zoom=12}}
      {{google-tile-layer type="TERRAIN" opacity=opacity}}
    {{/leaflet-map}}
  `);

  // pre-conditions
  assert.equal(Math.round($('.leaflet-google-layer').css('opacity')*10)/10, 0.7);

  this.set('opacity', 0.3);

  assert.equal(Math.round($('.leaflet-google-layer').css('opacity')*10)/10, 0.3);

});

test('sends action for load event', function(assert) {
  assert.expect(1);

  this.set('loadAction', () => {
    assert.ok(true, 'loading fired');
  });

  this.render(hbs`
    {{#leaflet-map lat=51.512983 lng=-0.138289 zoom=12}}
      {{google-tile-layer type="TERRAIN" onLoad=(action loadAction)}}
    {{/leaflet-map}}
  `);

  //simulate google maps tilesloaded event
  run(() => {
    googleTilelayer._layer.fire('load');
  });

});
