var path = require("path");

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-gitbook');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        'gitbook': {
            development: {
                output: path.join(__dirname, ".grunt/gitbook"),
                input: "./",
                title: "GMU Webdev Personal Website Tutorial",
                description: "Learn how to upload your website to the Mason Cluster using SSH (secure shell protocol)",
                github: "the-ben-waters/gmuwebdevtut"
            }
        },
        'gh-pages': {
            options: {
                base: '.grunt/gitbook'
            },
            src: ['**']
        },
        'clean': {
            files: '.grunt'
        }
    });

    grunt.registerTask('publish', [
        'gitbook',
        'gh-pages',
        'clean'
    ]);
    grunt.registerTask('default', 'gitbook');
};
