var gulp    = require('gulp'),
    config  = require('../config');

// We need the bootstrap fonts in public, lets copy
gulp.task('copy_fonts', function () {
    return gulp
        .src([
            // bootstrap glyphicons
            config.bowerPath + 'bootstrap/fonts/**/*.{ttf,woff,eot,svg}',
            // fontawesome, if you have it
            config.bowerPath + 'fontawesome/fonts/**/*.{ttf,woff,eot,svg}',
            // alternative spelling
            config.bowerPath + 'font-awesome/fonts/**/*.{ttf,woff,eot,svg}',
            config.bowerPath + 'Font-awesome/fonts/**/*.{ttf,woff,eot,svg}'
        ])
        .pipe(gulp.dest(config.themePath + 'fonts'));
});
