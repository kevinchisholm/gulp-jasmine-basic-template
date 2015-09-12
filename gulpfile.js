(function(){
    'use strict';

    /*global require: false */

    var gulp = require('gulp'),
        jasmine = require('gulp-jasmine');


    gulp.task('default', ['jasmine', 'watch']);

    gulp.task('watch', function(){
        gulp.watch(['src/**', 'spec/**'], ['jasmine']);
    });

    gulp.task('jasmine', function () {
        return gulp.src(['src/**', 'spec/*.js'])
            .pipe(jasmine({verbose:true, includeStackTrace: true}));
    });
})();