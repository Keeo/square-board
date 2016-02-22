/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      extension: 'sass'
    }
  });

  app.import('bower_components/tinycolor/dist/tinycolor-min.js');
  app.import('vendor/shims/tinycolor.js');

  return app.toTree();
};
