#!/usr/bin/env node --harmony

const path = require('path');
const fs = require('fs');
const execSync = require('child_process').execSync;
const options = require('minimist')(process.argv.slice(2));
const changeCase = require('change-case');
const settings = require('settings-store');
const chalk = require('chalk');

const filePackages = require('./file_packages');
const { listFunc, readmeFunc, versionFunc, configFunc } = require('./lib');
const getCommand = require('./lib/get-command');
const setDefaults = require('./lib/set-defaults');

// Settings
settings.init({ appName: "React Template Engine", reverseDNS: "com.bar.foo" });
setDefaults();
settings.setValue("commandUsed", getCommand());
const commandUsed = settings.value('commandUsed');
const isUsingHooks = settings.value('hooks');

const initTemplateModule = async () => {
  if (options.list || options.ls || (options.l && options.s)) await listFunc();
  if (options.help || options.h) await readmeFunc();
  if (options.version || options.v) await versionFunc();
  if (options.config || options._[0] === 'config') await configFunc();

  return new Promise((resolve, reject) => {
    const type = options._[0];
    const name = options._[1];

    if (!options._.length) reject(`\nNo arguments found. Run ${chalk.blue(`${commandUsed} --help`)} for more information.\n`);
    if (!name) reject(`\nUsage: ${chalk.blue(`${commandUsed} \<template name\> \<element name\>`)}\nRun ${chalk.blue(`${commandUsed} --help`)} for more information.\n`);
    if (!filePackages[type]) reject(`\nTemplate ${type} does not exist.\nRun ${chalk.blue(`${commandUsed} -ls`)} for all templates.\n`);
    if (isUsingHooks && !filePackages[type].hasHooks) reject(`\nTemplate ${type} does not support hooks.\n`);

    resolve({ type, name });
  });
};

function createComponent({ type, name }) {
  const fileEncoding = { encoding: 'utf-8', flag: 'rs' };
  const newType = isUsingHooks ? `${type}-hooks` : type;

  return new Promise(resolve => {
    console.log(`Creating ${type} ${name}${isUsingHooks ? ' with hooks' : ''}...`);

    fs.readdirSync(path.join(__dirname, `/file_package_repo/${newType}`)).forEach((file, i) => {
      const pascalName = changeCase.pascalCase(name);
      const camelName = changeCase.camelCase(name);
      const kebabName = changeCase.paramCase(name);
      if (!i) execSync(`mkdir ${name}`);
      const isFolder = file.lastIndexOf('.') === -1;

      if (isFolder) execSync(`mkdir ${name}/${file.replace(/Placeholder_pascal/g, pascalName)}`);
      else execSync(`touch ./${name}/${file.replace(/Placeholder_pascal/g, pascalName)}`);

      const data = fs.readFileSync(path.join(__dirname, `/file_package_repo/${newType}/${file}`), fileEncoding);
      fs.writeFileSync(`./${name}/${file.replace(/Placeholder_pascal/g, pascalName)}`, data.replace(/Placeholder_kebab/g, kebabName).replace(/Placeholder_camel/g, camelName).replace(/Placeholder_pascal/g, pascalName));
      resolve();
    });
  });
}

function finish() {
  console.log('Finished building.\n');
  process.exit();
}

function errorHandler(msg) {
  console.log(msg);
  process.exit();
}

initTemplateModule()
  .then(createComponent, errorHandler)
  .then(finish);
