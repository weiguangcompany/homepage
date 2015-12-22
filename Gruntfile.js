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
            }
        }
    });


    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //register task
    grunt.registerTask('default', ['express','watch']);
};
