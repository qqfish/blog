module.exports = function(grunt) {

    // Imports
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

	// Project configuration.
	grunt.initConfig({

		jekyll: {
			server : {
				src : '.',
				dest: 'build',
				server : true,
				server_port : 8000,
				auto : false
			},
			build: {
				src: 'src',
				dest: 'build'
			}
		},

		compass: {
            dev: {
                src: 'src/_styles',
                dest: 'build/css',
                linecomments: true,
                debugsass: true,
                relativeassets: true
            },
            prod: {
                src: 'src/_styles',
                dest: 'build/css',
                outputstyle: 'compressed',
                linecomments: false,
                forcecompile: true,
                debugsass: false,
                relativeassets: true
            }
		},

		watch: {
			compass: {
				files: ['src/styles/**/*.scss'],
				tasks: ['compass:dev']
			},
			jekyll: {
				files: ['src/**/*.html', 'src/img/**/*', 'src/fonts/**/*', 'src/js/**/*.js'],
				tasks: ['jekyll:build']
			}
		}
	});

	// Default task. Run standard jekyll server.
	grunt.registerTask('default', 'jekyll:server');
	grunt.registerTask('dev', 'jekyll:build compass:dev');
	grunt.registerTask('prod', 'jekyll:build compass:prod');
};