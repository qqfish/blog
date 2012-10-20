module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		jekyll: {
			server : {
				src : '.',
				dest: '_site',
				server : true,
				server_port : 8000,
				auto : true
			},
			dev: {
				src: '.',
				dest: '_site'
			},
			prod: {
				src: '.',
				dest: '_site'
			}
		},

		compass: {
		    dev: {
		        src: '_sass',
		        dest: '_site/css',
		        linecomments: true,
		        debugsass: true,
		        //images: '/path/to/images',
		        relativeassets: true
		    },
		    prod: {
		        src: '_sass',
		        dest: '_site/css',
		        outputstyle: 'compressed',
		        linecomments: false,
		        forcecompile: true,
		        debugsass: false,
		        //images: '/path/to/images',
		        relativeassets: true
		    }
		},

		watch: {
			compass: {
				files: ['_sass/*.scss'],
				tasks: ['compass:dev']
			},
			jekyll: {
				files: ['*.html'],
				tasks: ['jekyll:dev']
			}
		}
	});

	// Default task. Run standard jekyll server.
	grunt.registerTask('default', 'jekyll:server');
	grunt.registerTask('dev', 'compass:dev jekyll:dev');
	grunt.registerTask('prod', 'compass:prod jekyll:prod');

	// plugin tasks
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-compass');
};