var gulp       = require('gulp'),
    config     = require('../config'),
    less       = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    prefix     = require('gulp-autoprefixer'),
    header     = require('gulp-header'),
    concat     = require('gulp-concat'),
    watch      = require('gulp-watch'),
    notify     = require('gulp-notify');

// Compile our css and push it to the public webfolder
gulp.task('css_main', function () {
    gulp.src(config.themePath + 'less/main.less')
        .pipe(notify({
            title: "LESS",
            message: "Compiling main.less ..."
        }))
        .pipe(sourcemaps.init())
        .pipe(less().on('error', function(error) {
            notify().write(error);
        }))
        .pipe(prefix('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(header("/* This file is generated, do not edit by hand! */\n"))
        .pipe(sourcemaps.write('../css/maps', {
            includeContent: false,
            sourceRoot: '../less'
        }))
        .pipe(notify({
            title: "LESS",
            message: "Compiled: <%= file.relative %>"
        }))
        .pipe(gulp.dest(config.themePath + 'css/'));
});
