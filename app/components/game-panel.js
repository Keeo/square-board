import Ember from 'ember';
const { service } = Ember.inject;

export default Ember.Component.extend({
  game: service(),
  amount: Ember.computed.alias('game.amount'),
  increase: Ember.computed.alias('game.increase'),
  classNames: 'game-panel'
});
