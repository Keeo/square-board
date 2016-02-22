import Ember from 'ember';

export default Ember.Service.extend({
  increase: 0,
  amount: 0,

  run() {
    setInterval(() => {
      const amount = this.get('amount');
      this.incrementProperty('amount', this.get('increase'));
    }, 500);
  },

  levelUp(level) {
    this.incrementProperty('increase', 1);
  },

  build(level) {
    const cost = level * level;
    if (this.get('amount') >= cost) {
      this.decrementProperty('amount', cost);
      return true;
    } else {
      return false;
    }
  }
});
