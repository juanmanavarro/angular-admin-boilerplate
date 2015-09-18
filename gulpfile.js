var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    minifyCss = require('gulp-minify-css'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify');

// gulp
gulp.task('default', ['watch']);

gulp.task('reload', function() {
    return livereload.reload();
});

gulp.task('jshint', function() {
    return gulp.src('src/app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['src/app/**/*', 'src/index.html'], ['reload', 'jshint']);
});

gulp.task('compress', function() {
    gulp.src('src/index.html')
        .pipe(useref.assets())
        .pipe(gulpif('*.js', uglify({mangle: false})))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
    gulp.src('node_modules/font-awesome/fonts/**')
        .pipe(gulp.dest('dist/fonts'));
    gulp.src('src/images/**')
        .pipe(gulp.dest('dist/images'));
});

gulp.task('build', ['compress', 'copy']);
