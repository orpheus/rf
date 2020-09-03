const settings = require('settings-store');

const setConfig = require('./utils/set-config');
const defaultConfig = require('../config');

module.exports = () => {
  const usedBefore = settings.value('usedBefore');

  if (!usedBefore) {
    setConfig(defaultConfig, { isReset: true });
    settings.setValue("usedBefore", true);
  }
};
