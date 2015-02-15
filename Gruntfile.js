module.exports = function (grunt) {
	grunt.initConfig({
		project: grunt.file.readJSON('package.json'),
		shell: {
			compileDocs: {
				command: "./node_modules/sassdoc/bin/sassdoc src ./src/ -d docs"
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
				files: [
					'package.json',
					'bower.json',
				],
				commitFiles: [
					'package.json',
					'bower.json',
				],
				createTag: true,
				tagName: 'v%VERSION%',
				tagMessage: 'v%VERSION%',
				commitMessage: 'v%VERSION%',
				commit: true,
				push: true,
				pushTo: 'origin',
			}
		},
		concat: {
			options: {
				banner: '/*! veRepo.scss <%= project.version %> | MIT License | https://github.com/varemenos/verepo */\n\n'
			},
			dist: {
				src: [
					'src/functions/_**.scss',
					'src/prefixes/_**.scss',
					'src/helpers/_**.scss',
					'src/layout/_**.scss',
					'src/modules/_**.scss',
				],
				dest: '_verepo.scss'
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
		},
		autoprefixer: {
			options: {
				browsers: ["last 2 versions", "> 1%", "ie 8", "ie 9", "Firefox ESR"]
			},
			dist: {
				src: 'example/style.css',
				dest: 'example/style.css'
			}
		}
	});

	// load npm tasks
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-bump');

	// register custom tasks
	grunt.registerTask('update-docs', ['shell:compileDocs']);
	grunt.registerTask('update-dist', ['concat:dist']);
	grunt.registerTask('update-example', ['sass:dist', 'autoprefixer']);
	grunt.registerTask('update', ['update-docs', 'concat:dist', 'update-example']);
	grunt.registerTask('default', 'update');
};
