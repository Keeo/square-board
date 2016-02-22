import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const models = [];
    for (let i = 0; i < 32 * 32; ++i) {
      const square = this.get('store').createRecord('square', {
        position: i
      });
      models.push(square);
    }
    return models;
  },
  afterModel(model) {
    /*setInterval(() => {
      model[Math.floor(Math.random() * 32 * 32)].levelUp();
    }, 16);*/
  }
});
