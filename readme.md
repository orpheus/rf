## React Templating

### Installation
- Pull project in your preferred folder
- Run `npm link` in the root of the folder
- Open a new terminal session and the command `template` should be available
- Run `template --help` for options

### Usage
Run `template <template name> <component name>`. 
- The templates can be found below.
- The component name should be CamelCase, please do not use the word 'Component' in the name. 

### Available templates
At this moment the following templates are available:

#### component ####
**Command**: `template component Test`\
**Usage**: Full components that require a direct connection with the store (react-redux) and its own state

#### component-no-connect ####
**Command**: `template component-no-connect Test`\
**Usage**: Components that do not need a connection with the store, but do require its own state (dropdown, slider?)

#### component-stateless ####
**Command**: `template component-stateless Test`\
**Usage**: Components that do not require connection with the store or its own state (button?)