module.exports = function(grunt) {

    // Imports
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('svgo-grunt');
    grunt.loadNpmTasks('grunt-contrib-clean');

	// Project configuration.
	grunt.initConfig({

        clean: {
            svg: ['build/svg']
        },

		jekyll: {
			server : {
				src : 'src',
				dest: 'build',
				server : true,
				server_port : 8000,
				auto : false,
                baseurl : '/blog'
			},
			build: {
				src: 'src',
				dest: 'build',
                baseurl : '/blog'
			}
		},

        svgo: {
            optimise: {
                files: 'build/svg/*.svg'
            }
        },

        shell: {
            fontcustom: {
                command: 'bin/fontcustom.sh',
                stdout: true
            },
            newpost: {
                command: 'bin/newpost.sh',
                stdout: true
            },
            publish: {
                command: 'bin/publish.sh',
                stdout: true
            }
        },

		compass: {
            dev: {
                src: 'src/_styles',
                dest: 'build/css',
                outputstyle: 'expanded',
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
				files: ['src/_styles/**/*.scss'],
				tasks: ['compass:dev']
			},
			jekyll: {
				files: ['src/**/*.html', 'src/img/**/*', 'src/fonts/**/*', 'src/js/**/*.js'],
				tasks: ['jekyll:build', 'compass:dev']
			}
		}
	});

	// Default task. Run standard jekyll server.
	grunt.registerTask('default', 'prod');
	grunt.registerTask('dev', 'jekyll:build svgo:optimise shell:fontcustom clean:svg compass:dev');
    grunt.registerTask('prod', 'jekyll:build svgo:optimise shell:fontcustom clean:svg compass:prod');
	grunt.registerTask('server', 'jekyll:server');
};