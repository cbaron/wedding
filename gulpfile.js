var gulp = require("gulp");
var watch = require('gulp-watch');
var gutil = require("gulp-util");
var plumber = require("gulp-plumber");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');
var path = require('path');
var concatCss = require('gulp-concat-css');


var onError = function (err) {  
      gutil.beep();
      console.log(err);
};

var onBrowserifyError = function (err) {  
      gutil.beep();
      console.log(err.message);
      this.emit('end');
};

gulp.task('modules', function() {
    return browserify( { entries: [ './client/js/main.js' ], debug: true, list: true } )
    .transform( babelify.configure( { compact: false } ) )
    .transform("strictify")
    .bundle().on('error', onBrowserifyError)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./static/js'));
});

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(plumber({errorHandler: onError}))
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./client/css'));
});

gulp.task('concatCss', [ 'less' ], function () {
  return gulp.src('./client/css/*.css')
    .pipe(plumber({errorHandler: onError}))
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('./static/css'));
});

gulp.task("watch", function(){
    gulp.watch('./client/js/**/*.js', ['modules'])
    gulp.watch('./less/**/*.less', ['concatCss'])
});
