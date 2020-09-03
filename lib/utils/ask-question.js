const Confirm = require('prompt-confirm');

module.exports = query => {
  const confirm = new Confirm(query);
  return new Promise(resolve => {
    confirm.ask(answer => resolve(answer));
  });
};