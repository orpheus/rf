> this project is based off this man's work: https://bitbucket.org/richardvanhees/template/src/master/ All I did was tweak it to fit my personal preferences

## React Templating

### Installation
- `git clone https://github.com/orpheus/rf.git`
- Run `npm link` in the root of the folder
- Open a new terminal session and the command `rf` should be available
- Run `rf --help` for options

### Usage
Run `rf <template_name> <component_name>`. 
- The templates can be found below.

If no `<template_name>` is supplied, it will default to the `main` template
-  `rf <component_name>` 

### Available templates Payloads
At this moment the following templates are available:

#### main ####
**Command**: `rf main Component`\
**Description**: A basic react functional component with material-ui style integration and index default export

#### rsm ####
**Command**: `rf rsm StateManager`\
**Description**: A payload consisting of a redux reducer, actions, selectors, and helpers to manager async states in redux
