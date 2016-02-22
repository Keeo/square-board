export function initialize(appInstance) {
  const game = appInstance.lookup('service:game');
  game.run();
}

export default {
  name: 'game',
  initialize: initialize
};
