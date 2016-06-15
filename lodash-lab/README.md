# Using Lodash to Work With Collections

## Setting up our test environment

We will need to install Jasmine (the testing framework) and Karma (the test runner)

> 
    npm install jasmine
    npm install karma
    npm install karma-jasmine karma-chrome-launcher
    npm install -g karma-cli

## Configure Karma

Create a file called *karma.conf.js* in the root folder.

This file configures karma to load the appropriate files and run your tests in various browsers. Paste the following into the contents of the file.

```javascript
// Karma configuration
module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
        'src/**/*.js',
        'spec/**/*.js'
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
```

### Include Lodash

Run the following command to install lodash

    npm install lodash
    
We will now need to add lodash to the list of files karma loads for the tests.

In karma.conf.js add the path to lodash.min.js to the "files" array. It should look something like this when you're done.

```javascript
files: [
      'node_modules/lodash/lodash.min.js',
        'src/**/*.js',
        'spec/**/*.js'
    ],
```

From the command line run

    karma start
    
This should run all of your tests in the browsers we specified (Chrome). Karma will now watch your files and rerun your tests automatically when it detects any changes.

There should be 6 failing tests.

**Using lodash, implement the methods in PersonMethods.js and get all the tests passing.**


