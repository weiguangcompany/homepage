module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            options: {
                port: process.env.PORT || 3000
            },
            dev: {
                options: {
                    script: 'app.js',
                    debug: true
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            express: {
                files:  [ 'app.js' ],
                tasks:  [ 'express:dev' ],
                options: {
                    spawn: false
                }
            },
            jade: {
                files: ['views/*.jade'],
                tasks: ['jade']
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            src :['public/javascripts/*.js']
        },
        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'views',
                    src: [
                        '*.jade'
                    ],
                    dest: '.tmp',
                    ext: '.html'
                }]
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-jshint');

    //register task
    grunt.registerTask('default', ['express','jade','watch']);
};
