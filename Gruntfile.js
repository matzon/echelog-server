module.exports = function(grunt) {
    grunt.registerTask('default', ['mochaTest', 'jshint']);
    grunt.registerTask('test', 'mochaTest');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mochaTest: {
            test: {
                options: {
                },
                src: ['test/**/*.js']
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: { src: ['server.js', 'app/**/*.js', 'config/**/*.js', 'test/**/*.js']}
        },
    });

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-jshint');
};