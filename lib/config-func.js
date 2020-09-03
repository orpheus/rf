const cliInput = require('minimist')(process.argv.slice(3))._;
const settings = require('settings-store');
const chalk = require('chalk');
const { omit } = require('ramda');

const askQuestion = require('./utils/ask-question');
const getSpaces = require('./utils/get-spaces');
const setConfig = require('./utils/set-config');
const transformToObject = require('./utils/transform-to-object');
const defaultConfig = require('../config');

module.exports = () => new Promise(async (resolve, reject) => {
  const commandUsed = settings.value('commandUsed');

  // template config
  if (!cliInput.length) {
    const currentSettings = omit(['commandUsed', 'usedBefore'], settings.all());
    console.log('\nCurrent settings:');

    Object.keys(currentSettings).forEach(setting =>
      console.log(`${setting}:${getSpaces(currentSettings, setting)}${chalk.blue(currentSettings[setting])}`),
    );
    console.log(`\nYou can change these settings by running "${chalk.red(`${commandUsed} config <key> <value>`)}".\n`);
    process.exit();
  }

  // template config reset
  if (cliInput[0] === 'reset') {
    const ans = await askQuestion(`Are you sure you want to ${chalk.red('reset')} all settings to their ${chalk.red('default values')}?`);
    if (ans) {
      settings.clear();
      setConfig(defaultConfig, { isReset: true });
    }
    process.exit();
  }

  // template config <key> <value> <key> <value>...
  setConfig(transformToObject(cliInput));
  process.exit();
});