import Ember from 'ember';
const { computed } = Ember;
const { alias } = Ember.computed;

export default Ember.Component.extend({
  classNames: 'square',
  classNameBindings: 'type',
  type: alias('model.type'),

  attributeBindings: 'style',
  style: computed('model.backgroundColor', function() {
    return `background-color: #${this.get('model.backgroundColor')};`.htmlSafe();
  }),
  mouseEnter() {
    this.get('model').levelUp();
  }
});
