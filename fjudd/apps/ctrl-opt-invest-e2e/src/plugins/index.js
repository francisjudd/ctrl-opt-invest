const { preprocessTypescript } = require('@nrwl/cypress/plugins/preprocessor');

module.exports = (on, config) => {
  // Preprocess Typescript file using Nx helper
  on('file:preprocessor', preprocessTypescript(config));
};
