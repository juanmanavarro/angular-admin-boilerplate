var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    minifyCss = require('gulp-minify-css'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    inject = require('gulp-inject'),
    angularFilesort = require('gulp-angular-filesort');

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

gulp.task('inject', function() {
    var target = gulp.src('src/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var cssSources = gulp.src(['src/css/*.css'], {read: false});
    var angularSources = gulp.src('src/app/**/*.js');

    return target
        .pipe(inject(cssSources, { name: 'styles', relative: true }))
        .pipe(inject(angularSources, { name: 'angular', relative: true }))
        .pipe(gulp.dest('src'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['src/app/**/*', 'src/index.html'], ['reload', 'jshint', 'inject']);
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
