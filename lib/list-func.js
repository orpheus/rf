const chalk = require('chalk');
const settings = require('settings-store');
const filePackages = require('../templates');
const getSpaces = require('./utils/get-spaces');

module.exports = () => {
  const commandUsed = settings.value('commandUsed');
  const list = Object.assign({ Component: 'Description' }, filePackages);

  console.log((`
Some components also have a hooks type, which is shown in the table below. 
To activate this type, run ${chalk.red(`${commandUsed} config hooks true`)}. 

The following templates are available:

${Object.keys(list).map((tpl, i) => `${!i ? chalk.blue(tpl) : tpl}${getSpaces(list, tpl)}${!i ? chalk.blue(list[tpl]) : list[tpl].description}\n`)}
`).replace(/,/g, ''));
  process.exit();
}
;
