// Karma configuration
// Generated on Sat Feb 20 2016 19:40:48 GMT+0300 (RTZ 2 (зима))

var webpackConfig = require('./webpack.config');
var path = require('path');
var entry = path.resolve(webpackConfig.entry.app);
var preprocessors = {};
preprocessors[entry] = ['webpack'];

console.log(preprocessors);

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        path.resolve('./bower_components/angular/angular.min.js'),
        path.resolve('./bower_components/angular-mocks/angular-mocks.js'),
        entry + '.js',
        path.resolve('client/tests/*.js')
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: preprocessors,


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
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins: [
        require('karma-webpack'),
        'karma-jasmine',
        'karma-chrome-launcher'
    ]

  })
}
