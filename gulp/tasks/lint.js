var gulp    = require('gulp'),
    config  = require('../config'),
    watch   = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    jshint  = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    map     = require('map-stream'),
    notify  = require('gulp-notify');

var myReporter = function() {
    return map(function (file, cb) {
        if (!file.jshint.success) {
            file.jshint.results.forEach(function (result) {
                if (result.error) {
                    file.pipe(notify({
                        title: file.relative,
                        message: "Line: " + result.error.line + "/" + result.error.character + "\n" + result.error.reason
                    }));
                }
            });
        }
        cb(null, file);
    });
};

gulp.task('lint', function () {
    var glob = config.themePath + 'js/**/*.js';

    return gulp.src(glob)
        .pipe(notify({
            title: "JSHint",
            message: "Starting JSHint ..."
        }))
        .pipe(plumber())
        .pipe(jshint())
        // .pipe(jshint.reporter(stylish)) // Console output
        .pipe(new myReporter)
        .pipe(notify({
            title: "JSHint",
            message: "JSHint finished! See console for details."
        }))
});