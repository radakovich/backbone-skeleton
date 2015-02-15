module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        clean: ['dist/'],
        browserify: {
            dist: {
                files: {
                    'dist/js/app.js': ['scripts/js/**/*.js', 'scripts/js/**/*.handlebars']
                },
                options: {
                    transform: ['hbsfy'],
                    watch: true
                }
            },
            specs: {
                files: {
                    'scripts/test/dist/spec.js': ['scripts/test/js/**/*.js']
                },
                options: {
                    transform: ['hbsfy']
                }
            }
        },
        connect: {
            server: {
                uses_defaults: []
            }
        },
        karma: {
            options: {
                configFile: 'scripts/test/karma.conf.js'
            },
            single: {
                singleRun: true
            },
            watch: {
                singleRun: false
            }
        }

    });

    grunt.task.registerTask('default', [
        'clean',
        'browserify:specs',
        'karma:single',
        'browserify:dist'
    ]);

    grunt.task.registerTask('go', [
        'clean',
        'browserify:dist',
        'connect:server:keepalive'
    ])
}