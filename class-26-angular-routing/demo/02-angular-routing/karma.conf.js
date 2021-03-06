'use strict'

const webpack = require('./webpack.config.js')
delete webpack.entry

module.exports = function(config) {
  config.set({
    webpack,
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'test/*-test.js',
      'test/**/*-test.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'test/*-test.js': ['webpack'],
      'test/**/*-test.js': ['webpack']
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
