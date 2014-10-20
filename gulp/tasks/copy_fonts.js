var gulp    = require('gulp'),
    config  = require('../config'),
    combine = require('stream-combiner');

// We need the bootstrap fonts in public, lets copy
gulp.task('copy_fonts', function () {
    var combined = combine(
        gulp.src([config.bowerPath + 'bootstrap/fonts/**/*.{ttf,woff,eof,svg}']),
        gulp.src([config.bowerPath + 'font-awesome/fonts/**/*.{ttf,woff,eof,svg}']),
        gulp.dest(config.themePath + 'fonts')
    );
    combined.on('error', console.error.bind(console));
    return combined;
});
