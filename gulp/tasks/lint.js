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
            var hasErrors = false;
            file.jshint.results.forEach(function (result) {
                if (result.error) {
                    hasErrors = true;
                    file.pipe(notify({
                        title: file.relative,
                        message: "Line: " + result.error.line + "/" + result.error.character + "\n" + result.error.reason
                    }));
                }
            });

            if(hasErrors) {
                file.pipe(notify({
                    title: "JSHint",
                    message: "JSHint finished with errors! See console for details."
                }));
            }
        } else {
            file.pipe(notify({
                title: "JSHint",
                message: "JSHint finished! All good!"
            }));
        }
        cb(null, file);
    });
};

gulp.task('lint', function () {
    var glob = config.themePath + 'js/*.js';

    return gulp.src(glob)
        .pipe(notify({
            title: "JSHint",
            message: "Starting JSHint ..."
        }))
        .pipe(plumber())
        .pipe(jshint())
        // .pipe(jshint.reporter(stylish)) // Console output
        .pipe(new myReporter);

});
