//include gulp
var gulp      = require('gulp'),
    jshint    = require('gulp-jshint'),
    connect   = require('gulp-connect');

//WEB SERVER
gulp.task('webserver', function() {
    connect.server({
        root: '',
        fallback: 'index.html',
        livereload: false,
        port: 8000
    });
});

//Default task
gulp.task('default',['webserver']);