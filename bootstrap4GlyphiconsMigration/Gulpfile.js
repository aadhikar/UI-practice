var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer   = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var runSequence = require('gulp-run-sequence');

var port = 8989;

// configuration variables
var config = {
  sassPath: './app/scss',
  npmDir: './node_modules'
};
config.jsSources = [
  './app/js/**/*.js'
];
config.fontSources = [
  config.npmDir + '/bootstrap-sass/assets/fonts/bootstrap/**/*'
];
config.styleSources = [
  config.npmDir + '/bootstrap/scss/**/*.scss',
  './app/scss/**/*.scss'
];

// method 'errorLog' to log error during compilation
function errorLog(error){
	console.error.bind(error);
	this.emit('end');
}

// task "clean" to delete the dist folder
gulp.task('clean', function () {
  return del([
    './dist/**/*.*'
  ]);
});

// task "fonts" to copy fonts to dist
gulp.task('fonts', ['clean'], function() {
    return gulp.src(config.fontSources) // Gets all fonts
      .pipe(gulp.dest('dist/fonts/'));
});

//task 'html' to reload index.html file when there is any changes occured in SCSS, js, html views
gulp.task('html', function () {
  return gulp.src('./*.html')
      .pipe(connect.reload());
});

// task "sass" to compile *.scss files to styles.min.css file and save to dist
gulp.task('sass', ['clean'], function() {
  return gulp.src(config.styleSources) // Gets all files ending with .scss
    .on('error', errorLog)
    .pipe(sourcemaps.init())
    .pipe(sass({
    	style: 'compressed'
    }))
    .pipe(autoprefixer(['last 2 version', 'safari 5', 'ie 8', 'ie 9']))
    .pipe(concat('styles.css'))
    .pipe(cleanCSS())
    .pipe(rename({extname: '.min.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});

// task "scripts" to compile *.js files to scripts.min.js file and save to dist
gulp.task('scripts', ['clean'], function() {
  uglyOptions = {
  beautify: true,
  comments: true,
  sourceMap: false,
  mangle: false
};
  return gulp.src(config.jsSources) // Gets all files ending with .js in app/js
    .on('error', errorLog)
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(uglify(uglyOptions))
    .pipe(rename({extname: '.min.js' }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload());
});


gulp.task('connect', function(){
  return connect.server({
    root: ['../bootstrap4GlyphiconsMigration'],
    port: process.env.PORT || port,
    livereload: true
  });
});

// task 'watch' to look for changes in *.html, *.scss and *.js file to recompile files
gulp.task('watch', function () {
  gulp.watch(['./*.html', './app/**/*.html'], ['html']);
  gulp.watch(['./node_modules/bootstrap/scss/**/*.scss', './app/scss/**/*.scss', './app/**/*.js'], ['clean', 'fonts', 'sass', 'scripts']);
});

//gulp.task('default', ['clean', 'html', 'sass', 'scripts', 'watch', 'connect']);

// task 'build' to run tasks in specified sequence
gulp.task('build', function(cb) {
  runSequence('clean', ['fonts', 'html', 'sass', 'scripts', 'connect', 'watch'], cb);
});

// task 'default' to run tasks
gulp.task('default', function(){
  gulp.start('clean');
  gulp.start('fonts');
  gulp.start('html');
  gulp.start('sass');
  gulp.start('scripts');
  gulp.start('connect');
  gulp.start('watch');
});