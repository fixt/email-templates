var gulp = require('gulp');
var less = require('gulp-less');
var inline = require('gulp-inline-css');

gulp.task('styles', function () {
  return gulp.src('./styles/templates/*.less')
    .pipe(less())
    .pipe(gulp.dest('.build/styles'));
});

gulp.task('inline', ['styles'], function() {
  return gulp.src('./templates/*.html')
    .pipe(inline({
      applyStyleTags: true,
      applyLinkTags: true,
      removeStyleTags: true,
      removeLinkTags: true
    }))
    .pipe(gulp.dest('.build'));
});

gulp.task('build', ['styles','inline']);

gulp.task('watch', function () {
  gulp.watch('./templates/*.html',['build']);
  gulp.watch('./styles/**/*.less', ['build']);
});

gulp.task('default', ['build']);
