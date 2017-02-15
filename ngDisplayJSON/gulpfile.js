var gulp = require('gulp');
var connect = require('gulp-connect');
var cors = require('cors');
var del = require('del');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var shell = require('gulp-shell');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');

gulp.task('clean', function (cb) {
  return del([
    './dist/**/*'
  ]);
});

// Compiles, autoprefixes & minifies the less files
gulp.task('sass', function () {
  return gulp.src(['./scss/styles.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(['last 2 version', 'safari 5', 'ie 8', 'ie 9']))
        .pipe(concat('styles.css'))
        .pipe(cleanCSS())
        .pipe(rename({extname: '.min.css' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});


gulp.task("scripts", function() {
	uglyOptions = {
		beautify: true,
		  comments: true,
		  sourceMap: false,
		  mangle: false
		};
  return gulp.src("./app.js")
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(uglify(uglyOptions))
    .pipe(rename({extname: '.min.js' }))
    .pipe(sourcemaps.write(".")).pipe(gulp.dest("./dist"));
});

gulp.task('index', function () {
  var target = gulp.src('./index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['./dist/**/*.js', './dist/**/*.css'], {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch(['./scss/**/*.scss', './controllers/**/*.js'], ['clean','sass', 'scripts']);
});



gulp.task('connect', function (cb) {
 connect.server({
    root      : '../ngDisplayJSON',
    port: process.env.PORT || 8800,
    livereload: true
  });
});





/*gulp.task('all', function(cb){
  runSequence('clean', 'sass', 'connect', 'watch', cb); 
});*/

gulp.task('default', function(){
	gulp.start('clean');
	gulp.start('sass');
	gulp.start('scripts');
	gulp.start('connect');
	gulp.start('watch');
})