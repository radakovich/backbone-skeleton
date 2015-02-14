module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.initConfig({
        browserify: {
            'dist/js/app.js': ['scripts/app.js']
        },
        connect: {
            server: {
                uses_defaults: []
            }
        }
    });

    grunt.task.registerTask('default', ['connect:server::keepalive']);
}