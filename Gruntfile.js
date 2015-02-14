module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        connect: {
            server: {
                uses_defaults: []
            }
        }
    });

    grunt.task.registerTask('default', ['connect:server::keepalive']);
}