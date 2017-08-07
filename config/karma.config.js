/*jslint node: true */
"use strict";

module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: [ 'jasmine' ],
        files: [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/materialize-css/dist/js/materialize.js',
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-resource/angular-resource.js',
            'node_modules/angular-animate/angular-animate.js',
            'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
            'node_modules/firebase/firebase.js',
            'node_modules/angularfire/dist/angularfire.js',
            'node_modules/angular-materialize/src/angular-materialize.js',
            'app/*.module.js',
            'app/*.js',
            'app/**/*.js',
            'app/**/*.spec.js',
            'app/**/*.html'
        ],
        preprocessors: {
            'app/**/*.html': 'ng-html2js'
        },
        reporters: [ 'progress' ],
        colors: true,
        autoWatch: false,
        browsers: [ 'PhantomJS' ],
        singleRun: true,
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
        ]
    });
};