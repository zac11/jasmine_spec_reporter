
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
//require('protractor/built/logger').Logger.logLevel = 1;


exports.config={
    framework:'jasmine',
    rootElement: 'app',
    seleniumAddress:"http://localhost:4444/wd/hub",
    jasmineNodeOpts:{
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        print: function () {
        }
    },
    specs:["spec.js"],
    capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      args: ['--test-type']
    }
  },
  onPrepare:function(){
      jasmine.getEnv().addReporter(new SpecReporter({
          spec:{
              displayStacktrace:true
          },
          summary:{
              displayDuration:false
          }

      }));
  }

};