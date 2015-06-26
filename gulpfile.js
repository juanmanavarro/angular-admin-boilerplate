var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    jshint = require('gulp-jshint');

// gulp
gulp.task('default', ['watch']);

gulp.task('reload', function() {
    return livereload.reload();
});

gulp.task('jshint', function() {
    return gulp.src('app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
})

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['app/**/*', 'index.html'], ['reload', 'jshint']);
});