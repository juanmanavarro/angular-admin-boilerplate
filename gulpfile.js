var gulp = require('gulp'),
    livereload = require('gulp-livereload');

// gulp
gulp.task('default', ['watch']);

gulp.task('reload', function() {
    return livereload.reload();
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['app/**/*', 'index.html'], ['reload']);
});