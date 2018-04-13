const gulp = require('gulp');
const zip = require('gulp-zip');

gulp.task('default', () =>
    gulp.src('files/**/*')
        .pipe(zip('BetterPotter.zip'))
        .pipe(gulp.dest('dist'))
);
