/*jslint node: true */
"use strict";

module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		jshint:{
			all:['Gruntfile.js','app/*.module.js','app/*.js','app/**/*.js','!app/**/*.spec.js']
		},
		karma:{
			options:{
				configFile:'config/karma.config.js'
			},
			unit:{
				singleRun:true
			},
			continuous:{
				singleRun:false,
				autoWatch:true
			}
		},
		html2js:{
			options:{
				base:'app',
				module:'templates'
			},
			dist:{
				src:['app/**/*.html'],
				dest:'tmp/templates.js'
			}
		},
		concat:{
			options:{
				separator:';'
			},
			dist:{
				src:['app/*.module.js','app/*.config.js','app/*.run.js','app/*.js','app/**/*.module.js','app/**/*.config.js','app/**/*.run.js','app/**/*.js','tmp/*.js','!app/**/*.spec.js'],
				dest:'dist/app.js'
			}
		},
		uglify:{
			files:{
				'dist/app.js':['dist/app.js']
			},
			options:{
				mangle:false
			}
		},
		clean:{
			temp:{
				src:['tmp']
			}
		},
		watch:{
			dev:{
				files:['Gruntfile.js','app/*.js','app/**/*.js','*.html','app/**/*.html'],
				tasks:[ 'jshint', 'karma:unit', 'html2js:dist', 'concat:dist', 'clean:temp' ],
			    options: {
			      atBegin: true
			    }
			},
			min:{
				files:['Gruntfile.js','app/*.js','app/**/*.js','*.html','app/**/*.html'],
				tasks:[ 'jshint', 'karma:unit', 'html2js:dist', 'concat:dist', 'clean:temp','uglify:dist' ],
			    options: {
			      atBegin: true
			    }
			}
		},
		connect: {
		  	server: {
			    options: {
			      	hostname: 'localhost',
			      	port: 80
			    }
		  	}
		},
		compress: {
	  		dist: {
			    options: {
			      archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip'
			    },
			    files: [{
				      src: [ 'index.html' ],
				      dest: '/'
				    }, {
				      src: [ 'dist/**' ],
				      dest: 'dist/'
				    }, {
				      src: [ 'assets/**' ],
				      dest: 'assets/'
				    }, {
				      src: [ 'node_modules/**' ],
				      dest: 'node_modules/'
			    }]
		  	}
		}

	});

	grunt.loadNpmTasks('grunt-npm-install');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('build', ['npm-install', 'connect:server', 'watch:dev']);
	grunt.registerTask('test', ['npm-install', 'jshint', 'karma:continuous']);
	grunt.registerTask('build-minified', ['npm-install', 'connect:server', 'watch:min']);
	grunt.registerTask('package', ['npm-install', 'jshint', 'karma:unit', 'html2js:dist', 'concat:dist', 'uglify:dist','clean:temp', 'compress:dist']);
};