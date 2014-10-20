var gulp      = require('gulp'),
    config    = require('../config'),
    minifyCss = require('gulp-minify-css'),
    concat    = require('gulp-concat'),
    header    = require('gulp-header'),
    less      = require('gulp-less');

// Minify the css
gulp.task('css_minify', ['css_main'], function () {
    gulp.src(config.themePath + 'css/*.css')
        .pipe(concat('all.css'))
        .pipe(minifyCss())
        .pipe(header("/* This file is generated, do not edit by hand! */\n"))
        .pipe(gulp.dest(config.themePath + 'css/'));
});