import Ember from 'ember';
import DS from 'ember-data';
import tinycolor from 'tinycolor';
const { computed } = Ember;

export default DS.Model.extend({
  position: DS.attr('integer'),
  type: DS.attr('string', {defaultValue: 'grass'}),
  level: DS.attr('integer', {defaultValue: 0}),

  backgroundColor: computed('type', 'level', function() {
    switch (this.get('type')) {
      case 'grass':
        return tinycolor({ r: 16, g: this.get('level') * 16, b: this.get('level') * 2 }).toHex();
      default:
        return "#0f0";
    }
  }),
  levelUp() {
    this.incrementProperty('level');
  }
});
