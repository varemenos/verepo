module.exports = function (grunt) {
	// Project conf
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
					port: 8080,
					base: './docs',
					keepalive: true
				}
			}
		},
		watch: {
			docs: {
				files: ["assets/css/lib/*/_*.scss"],
				tasks: ["shell:compileDocs"],
				options: {
					interrupt: true
				}
			}
		}
	});

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');

	// default task
	grunt.registerTask('default', ['connect:server']);
};
