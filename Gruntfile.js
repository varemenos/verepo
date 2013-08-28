module.exports = function(grunt) {
	// Project conf
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		shell: {
			compileDocs: {
				command: "sassdoc -d ./docs -n veRepo"
			}
		},
		watch: {
			docs: {
				files: ["lib/**/_*.scss"],
				tasks: ["shell:compileDocs"],
				options: {
					interrupt: true
				}
			}
		}
	});

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');

	// default task
	grunt.registerTask('default', ['watch']);
}
