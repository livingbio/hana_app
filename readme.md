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

### Doc

Make your chrome can issue ajax request:

    1. npm run watch
    1. open -n -a  /Applications/Google\ Chrome.app  --args  --user-data-dir="/tmp/" --disable-web-security  # form mac
    2. open index.html directly with the chrome

release 

    we build with [cordova build](build.phonegap.com).  just zip directory www. and send the zip to cordova build is very easily, if you want to build by your self, please contact tim or andy to be a phonegap collaborator 

to unit test:

    npm run test
    
test report:

    after run unit test.  your repoat located in coverage/lcov-report/index.html and console. 


test in your device. 
	
    use desktop phongap app. it can lauch a demo server.  
    in your device. use phonegap app. it can fetch paged in phonegap server. so you can test it in your phone

