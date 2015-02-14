module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        clean: ['dist/'],
        browserify: {
            'dist/js/app.js': ['scripts/app.js']
        },
        connect: {
            server: {
                uses_defaults: []
            }
        },
        karma: {
            unit: {
                configFile: 'scripts/test/karma.conf.js'
            }
        }
    });

    grunt.task.registerTask('default', [
        'clean',
        'browserify',
        'connect:server::keepalive'
    ]);
}