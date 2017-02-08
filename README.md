# Jasmine Spec Reporter


**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Jasmine Spec Reporter](#)
- [Installation](#)
- [Protractor Changes](#)



This is a protractor example of Jasmine Spec Reporter, which is a real time console spec reporter for jasmine behavior-driven development testing framework.


# Installation

Install Jasmine Spec Reporter via `npm` 

`npm install jasmine-spec-reporter --save-dev`

The code snippets cover the protractor implementation of the reporter tool. 

Please see this [link](https://github.com/bcaudan/jasmine-spec-reporter) for a full implementation for jasmine node tests and other configuration files. Special thanks to [Bastein Caudan](https://github.com/bcaudan) for this. Please star his repository.


# Protractor Changes

To use this reporter in the protractor tests, add the following to your `conf.js` file

```javascript
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config={
//your configuration here

onPrepare:function(){
      jasmine.getEnv().addReporter(new SpecReporter({
          spec:{
              displayStacktrace:true
          },
          summary:{
              displayDuration:false
          }

      }));
};
```

For a full implementation, see the [conf.js](https://github.com/zac11/jasmine_spec_reporter/blob/master/conf.js) file in this repository.
