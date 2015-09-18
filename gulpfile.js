var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', function() {
	gulp.src('/styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
	gulp.watch('./styles/*.scss', ['sass']);
});