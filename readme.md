## Requirements

*   Node.js 4.4.5+
*   Cordova 6.2.0+


## Development

refere Makefile.

before start. make sure you have [nodejs](https://nodejs.org/en/) installed

after that, open terminal and do the following commands


    npm install -g cordova
    npm install -g webpack
    npm install

### launch emulator

For temporary development:


    // cordova emulate browser
    npm run watch
    open browser directly


Make your chrome can issue ajax request:

    open -n -a  /Applications/Google\ Chrome.app  --args  --user-data-dir="/tmp/" --disable-web-security

For final development:

    cordova emulate ios


For unit test:

    npm run test

please read document about enzyme and see example in test.spec.jsx

Tool used in ut:

    * chai, assertion  http://chaijs.com/api/bdd/
    * enzyme: render and inspect reactjs rendered dom
    * jset: test framework && test runner


### launch development browser


	cordova serve


