/* eslint-env node */
'use strict';

module.exports = function(/* deployTarget */) {
  let ENV = {
    build: {
      environment: 'production'
    }
    // include other plugin configuration that applies to all deploy targets here
  };

  return ENV;
};
