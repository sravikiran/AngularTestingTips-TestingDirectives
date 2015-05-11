"use strict";

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        html2js:{
            main: {
                src: ['src/*.html'],
                dest: 'src/templates.js'
            }
        },
        karma:{
            unit: {
                options:{
                    configFile:'karma.conf.js'
                }
            }
        }
    });

    grunt.registerTask('default', ['html2js','karma:unit']);
};
