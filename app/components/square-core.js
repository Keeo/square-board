import Ember from 'ember';
const { computed } = Ember;
const { alias } = Ember.computed;

export default Ember.Component.extend({
  classNames: 'square',
  classNameBindings: ['type', 'color'],
  type: alias('model.type'),
  color: computed('model.level', function(){
    return 'square-color-' + this.get('model.level');
  }),
  mouseEnter() {
    console.log("called");
    this.get('model').levelUp();
  }
});
