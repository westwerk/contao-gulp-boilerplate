var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');
var combine = require('stream-combiner');
var prefix = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

// Watch the css direcotry for changes and trigger the live reload
// For livereload see https://github.com/vohof/gulp-livereload
gulp.task('watch', function () {
	gulp.watch('./files/theme/less/main.less', ['css_main']);
    gulp.watch('./files/theme/less/partials/*.less', ['css_main']);

    livereload.listen();
    gulp.watch('./files/theme/css/**').on('change', livereload.changed);
});

// Compile our css and push it to the public webfolder
gulp.task('css_main', function () {
    var combined = combine(
        gulp.src('./files/theme/less/main.less'),
        less(),
        prefix('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'),
        minifyCss(),
        gulp.dest('./files/theme/css') //,
    );

    combined.on('error', console.error.bind(console));
    return combined;
});

// We need the bootstrap fonts in public, lets copy
gulp.task('copy_fonts', function () {
    var combined = combine(
        gulp.src(['./bower_components/bootstrap/fonts/**/*.{ttf,woff,eof,svg}']),
        gulp.src(['./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}']),
        gulp.dest('./files/theme/fonts')
    );
    combined.on('error', console.error.bind(console));
});

gulp.task('default', ['css_main', 'copy_fonts']);
gulp.task('dev', ['watch']);