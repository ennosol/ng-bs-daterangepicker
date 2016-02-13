module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['src/nsl-bootstrap-daterangepicker.js', 'test/**/*.js']
    },

    karma: {
      unit: {
        options: {
          basePath: './',
          frameworks: ['jasmine'],
          browsers: ['PhantomJS'],
          autoWatch: true,
          singleRun: true,
          files: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'bower_components/momentjs/min/moment.min.js',
            'bower_components/bootstrap-daterangepicker/daterangepicker.js',
            'src/nsl-bootstrap-daterangepicker.js',
            'test/**/*.js'
          ]
        }
      }
    },

    uglify: {
      options: {
        preserveComments: 'some',
        sourceMap: 'dist/nsl-bootstrap-daterangepicker.min.js.map',
        sourceMappingURL: 'nsl-bootstrap-daterangepicker.min.js.map',
        report: 'min'
      },
      dist: {
        files: {
          'dist/nsl-bootstrap-daterangepicker.min.js': ['src/nsl-bootstrap-daterangepicker.js']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'karma']);

};