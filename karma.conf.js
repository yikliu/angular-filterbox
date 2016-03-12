module.exports = function(config){
  config.set({

    basePath : '',

    preprocessors: {
      "app/tpl/filterbox.html": "ng-html2js"
    },

    ngHtml2JsPreprocessor: {
        stripPrefix: 'app/'
    },

    files : [
        'app/bower_components/jquery/dist/jquery.min.js',
        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-mocks/angular-mocks.js',
        'app/bower_components/angular-jasmine-matchers/matchers',
        'app/bower_components/angular-route/angular-route.js',
        'app/bower_components/underscore/underscore-min.js',
        'app/app.js',
        'app/controller*/**/*.js',
        'app/directives*/**/*.js',
        'app/services*/**/*.js',
        'app/**/*.html',
        'app/app.css',
        'app/test*/**/*.js',
        'app/tpl/**/*.*',
        'app/tpl/filterbox.html'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

    });
};
