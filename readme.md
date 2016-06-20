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



For final development:


    cordova emulate ios


For unit test:

    npm run test

please read document about enzyme and see example in test.spec.jsx


### launch development browser


	cordova serve


