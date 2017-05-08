var gulp = require('gulp');
var stylus = require('gulp-stylus');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');

gulp.task('default', function build(){
	return gulp.src('stylesheet/*.styl')
		.pipe(stylus())
		.pipe(uglifycss())
		.pipe(rename(function(path){
			path.basename += ".min";
			path.extname = ".css";
		}))
		.pipe(gulp.dest('.'));
});
