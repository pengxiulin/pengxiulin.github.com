module.exports = function (grunt) {
	grunt.initConfig({
		less: {
			compile: {
				files: {
					'skin/page.css': 'skin/page.less'
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
