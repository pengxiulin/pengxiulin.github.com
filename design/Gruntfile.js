module.exports = function (grunt) {
	grunt.initConfig({
		less: {
			compile: {
				files: {
					'skin/veryless.css': 'skin/veryless.less'
				}
			}
		},
		watch: {
			scripts: {
				files: ['skin/*.less'],
				tasks: ['less']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['less', 'watch']);
};
