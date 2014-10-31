/* jslint node: true */
'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-cov');
  grunt.loadNpmTasks('grunt-blanket');

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'lib/*.js', 'test/*.js']
    },
    mochacov: {
      test: {
        options: {
          reporter: 'spec',
        }
      },
      coverage: {
        options: {
          coveralls: true
        }
      },
      options: {
        files: 'test/*.js'
      }
    }
  });

  // available tasks
  grunt.registerTask('default', ['jshint','mochacov:test']);
  grunt.registerTask('travis', ['jshint','mochacov']);
};