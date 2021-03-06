// var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
// var reporter = new HtmlScreenshotReporter({
//   dest: 'target/screenshots',
//   filename: 're-sight.html',
//   cleanDestination: true,
//   showSummary: true,
//   showConfiguration: false,
//   reportTitle: 're-sight',

//   ignoreSkippedSpecs: false,
//   captureOnlyFailedSpecs: true

// });


// An example configuration file.
exports.config = {
  params:{
    user: "dbowie",
    pass: "test@re-sight.com",
    navTo: require('./navigationmenu.js')
  },

  plugins: [{
    package: 'protractor-console',
    logLevels:['severe']
  }],

  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['example_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  beforeLaunch: function() {
    // return new Promise(function(resolve){
    //   reporter.beforeLaunch(resolve);
    // });
  },

  onPrepare: function(){
    require('./login.js');
    require('./utils/utilities.js');
    require('./utils/ptor.js');
    // var SpecReporter = require('jasmine-spec-reporter');
    // jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    // jasmine.getEnv().addReporter(reporter);
    var AllureReporter = require('./node_modules/jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
  },

  afterLaunch: function(exitCode) {
    // return new Promise(function(resolve){
    //   reporter.afterLaunch(resolve.bind(this, exitCode));
    // });
  },

  jasmineNodeOpts: {
   // print: function() {}
  }

};
