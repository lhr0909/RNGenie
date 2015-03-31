var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var connect = require('gulp-connect');
var reactify = require('reactify');
var watchify = require('watchify');

var isDebug = false;

//TODO: externalize the path down below at some point..
var path = {};

/**
 * this task turns on/off debug (ghetto version lol)
 */
gulp.task('turn-on-debug', function() {
    isDebug = true;
});

gulp.task('copy-html-src', function() {
    return gulp.src('./src/**/*.html')
            .pipe(gulp.dest('./dist'));
});

gulp.task('build-sass', function() {
    var build = gulp.src('./src/css/**/*.scss')
            .pipe(sass());

    if (!isDebug) {
        build = build.pipe(minifyCSS());
    }

    return build.pipe(gulp.dest('./dist/css/'));
});

/**
 * js build task, jshints + browserifies + uglifies it and stuff
 */
gulp.task('build-js', function() {
    var build = browserify({
        entries: ['./src/js/App.js'],
        transform: [reactify],
        debug : isDebug
    }).bundle()
      .pipe(source('app.js'));

    if (!isDebug) {
        build = build.pipe(streamify(uglify()));
    }

    return build.pipe(gulp.dest('./dist/js'));
});

/**
 * serve task, uses gulp-connect to serve the dist folder
 */
gulp.task('serve', ['debug'], function() {
    connect.server({
        root: 'dist',
        livereload: false,
        port: 5000
    });
});

/**
 * final build tasks (call these for doing work)
 */
gulp.task('default', ['copy-html-src', 'build-js', 'build-sass'], function() {});

gulp.task('debug', ['turn-on-debug', 'default'], function() {});

gulp.task('watch', function() {
    //TODO: re-implement watch task using
    //http://tylermcginnis.com/reactjs-tutorial-pt-2-building-react-applications-with-gulp-and-browserify/
});
