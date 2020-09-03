#!/usr/bin/env node --harmony

const path = require('path');
const fs = require('fs');
const execSync = require('child_process').execSync;
const options = require('minimist')(process.argv.slice(2));
const changeCase = require('change-case');
const settings = require('settings-store');
const chalk = require('chalk');

const payloads = require('./payloads');
const { listFunc, readmeFunc, versionFunc, configFunc } = require('./lib');
const getCommand = require('./lib/get-command');
const setDefaults = require('./lib/set-defaults');

// Settings
settings.init({ appName: "React Template Engine", reverseDNS: "com.bar.foo" });
setDefaults();
settings.setValue("commandUsed", getCommand(), false);
const commandUsed = settings.value('commandUsed');

const initTemplateModule = async () => {
  if (options.list || options.ls || (options.l && options.s)) await listFunc();
  if (options.help || options.h) await readmeFunc();
  if (options.version || options.v) await versionFunc();
  if (options.config || options._[0] === 'config') await configFunc();

  return new Promise((resolve, reject) => {
    let type = options._[0];
    let name = options._[1];

    if (!options._.length) reject(`\nNo arguments found. Run ${chalk.blue(`${commandUsed} --help`)} for more information.\n`);
    // if no payload type was specified, default to 'main'
    if (!payloads[type]) {
      name = type
      type = 'main'
    }

    resolve({ type, name });
  });
};

function createComponent({ type: payload, name }) {
  const fileEncoding = { encoding: 'utf-8', flag: 'rs' };

  return new Promise(resolve => {
    console.log(`Creating payload: ${payload}`);
    console.log(`Naming payload: ${name}\n`)
    console.log(path.join(__dirname, `/payloads/${payload}`))
    // make the initial parent directory
    try {
      execSync(`mkdir ${name}`);
    } catch (err) {
      console.log(chalk.red(`Directory already exists: ${name}. Overwriting...`))
    }

    fs.readdirSync(path.join(__dirname, `/payloads/${payload}`)).forEach((file, i) => {
      const pascalName = changeCase.pascalCase(name);
      const camelName = changeCase.camelCase(name);
      const kebabName = changeCase.paramCase(name);

      console.log(chalk.blue(`Building: ${file.replace(/\$NAME\$/g, pascalName)} ${i}`))

      // if folder in payload, create the folder
      const isFolder = file.lastIndexOf('.') === -1;
      if (isFolder) execSync(`mkdir ${pascalName}/${file.replace(/\$NAME\$/g, pascalName)}`);
      else execSync(`touch ./${pascalName}/${file.replace(/\$NAME\$/g, pascalName)}`);

      // read the data from the files and replace template names with argument name
      const data = fs.readFileSync(path.join(__dirname, `/payloads/${payload}/${file}`), fileEncoding);
      fs.writeFileSync(
        `./${name}/${file.replace(/\$NAME\$/g, pascalName)}`,
        data
          .replace(/Placeholder_kebab/g, kebabName).replace(/Placeholder_camel/g, camelName)
          .replace(/\$NAME\$/g, pascalName)
      );
      resolve();
    });
  });
}

function finish() {
  console.log('Finished building');
  process.exit();
}

function errorHandler(msg) {
  console.log(msg);
  process.exit();
}

initTemplateModule()
  .then(createComponent, errorHandler)
  .then(finish);
