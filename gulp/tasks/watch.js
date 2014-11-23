var gulp       = require('gulp'),
    config     = require('../config'),
    livereload = require('gulp-livereload'),
    watch      = require('gulp-watch');

// Watch the css direcotry for changes and trigger the live reload
// For livereload see https://github.com/vohof/gulp-livereload
gulp.task('watch', ['css_main', 'lint'], function () {
    // dispatch watchers
    gulp.watch(config.themePath + 'less/**/*.less', ['css_main']);
    gulp.watch(config.themePath + 'js/**/*.js', ['lint']);

    livereload.listen();
    gulp.watch(config.themePath + 'css/**')
        .on('change', function(object) {
        	livereload.changed(object.path);
        });
});

