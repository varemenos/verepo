module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		shell: {
			compileDocs: {
				command: "sassdoc -d ./docs -n veRepo"
			}
		},
		connect: {
			server: {
				options: {
					port: 8000,
					base: './',
					keepalive: true
				}
			}
		},
		bump: {
			options: {
				createTag: true,
				tagName: 'v%VERSION%',
				tagMessage: 'v%VERSION%',
				commitMessage: 'v%VERSION%',
				commit: false,
				push: false,
				files: [
					'package.json',
					'bower.json',
				]
			}
		},
		concat: {
			options: {
				banner: '/*! veRepo.scss v%VERSION% | MIT License | https://github.com/varemenos/verepo */\n\n'
			},
			dist: {
				src: [
					'src/functions/_**.scss',
					'src/prefixes/_**.scss',
					'src/helpers/_**.scss',
					'src/layout/_**.scss',
					'src/modules/_**.scss',
				],
				dest: 'dist/_verepo.scss'
			}
		},
		sass: {
			options: {
				unixNewlines: true
			},
			dist: {
				options: {
					style: 'compressed'
				},
				files: [{
					'example/style.css': 'example/style.scss'
				}]
			}
		}
	});

	// load npm tasks
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-bump');

	// register custom tasks
	grunt.registerTask('update-docs', ['shell:compileDocs']);
	grunt.registerTask('update-dist', ['concat:dist']);
	grunt.registerTask('update-example', ['sass:dist']);
	grunt.registerTask('update', ['update-docs', 'concat:dist', 'update-example']);
	grunt.registerTask('default', 'update');
};
