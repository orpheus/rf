const settings = require('settings-store');
const chalk = require('chalk');
const getBoolean = require('./transform-to-boolean');

module.exports = (config, opts) => {
  const options = opts || {};
  const configKeys = Object.keys(config);

  configKeys.forEach((key, i) => {
    settings.setValue(key, getBoolean(config[key]), false);
    !options.isReset && console.log(`${chalk.blue(key)} is now ${chalk.red(config[key])}`);
    options.isReset && console.log(`The ${chalk.blue('default values')} have been restored.`);
    if (i + 1 === configKeys.length) console.log('');
  });
};