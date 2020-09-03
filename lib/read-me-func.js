const chalk = require('chalk');

module.exports = () => {
  console.log(`
This module will help you to easily create new React components.
    
${chalk.blue('Each component includes the following files:')}
- Main component
- Test
- Styling

${chalk.blue('The following commands are available:')}
--help     --h            Open this help overview
--version  --v            Show package version
--list     --ls           Show a list of available templates
--config   config         See below
"tpl-name  el-name"       Choose a template and create a folder with the desired element name (CamelCase)

${chalk.blue('The following config commands are available')}
config                    Show current settings
config reset              Reset config to default settings
config <key> <value>      Set config 'key' to 'value'         

${chalk.blue('Developer:')}
ohryan                    ryanachacon@gmail.com

`);
  process.exit();
};
