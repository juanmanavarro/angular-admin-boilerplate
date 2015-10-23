// An example configuration file.
exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Framework to use. Jasmine 2 is recommended.
    framework: 'jasmine2',

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['specs/*.spec.js'],

    exclude: ['specs/i.*'],

    suites: {},

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    mocks: {
        default: [], // default value: []
        dir: 'mocks' // default value: 'mocks'
    },
    onPrepare: function(){
        // require('protractor-http-mock').config = {
        //     rootDirectory: __dirname, // default value: process.cwd()
        //     protractorConfig: 'conf.js' // default value: 'protractor.conf'
        // };
        // var width = 400;
        // var height = 700;
        // browser.driver.manage().window().setSize(width, height);
        // var x = 0;
        // var y = 0;
        // browser.driver.manage().window().setPosition(x, y);
    },
    baseUrl: 'http://localhost/cites/src/'
};
