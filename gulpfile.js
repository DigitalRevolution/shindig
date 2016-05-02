'use strict'

var gulp = require('gulp'); 
var sass = require('gulp-sass'); 
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer'); 
var concat = require('gulp-concat');
var uglify = require('gulp-uglify'); 

gulp.task('default',function(){
	console.log('gulp task intiated'); 
}); 

// Create Gulp task to rename and minify .scss
gulp.task('process-styles', function(){	
	return gulp.src('src/sass/*.scss')
	.pipe(sass({style: 'expanded'}).on('error', sass.logError))
	.pipe(autoprefixer({browsers: ['last 2 versions']}))
	.pipe(rename({suffix: '.min'}))	
	.pipe(minifycss())
	.pipe(gulp.dest('./dest/css'))
}); 

// Create Gulp task to rename and ultify js
gulp.task('process-scripts', function(){
	return gulp.src('./src/js/*.js')
	.pipe(concat('main.js'))
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('./dest/js'))
}); 

gulp.task('watch', function(){
	gulp.watch('src/js/*.js', ['process-scripts'])
	gulp.watch('src/sass/*.scss', ['process-styles'])
});
