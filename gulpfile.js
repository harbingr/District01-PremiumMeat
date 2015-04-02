var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-ruby-sass'),
    less = require('gulp-less'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    developmentRoot = ' ',
    wiredep = require('wiredep').stream,

    onError = function onError(err) {
        console.log(err);
    };

    gulp.task('webserver', function() {
      gulp.src(developmentRoot)
        .pipe(webserver({
          livereload: true,
          directoryListing: false,
          open: true,
          host: '0.0.0.0',
          fallback: 'index.html'
        }));
    });

    gulp.task('styles', function() {
        return gulp.src('./sass/*.scss')
            .pipe(plumber({
              errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
            .pipe(compass({
                config_file: 'config.rb',
                css: './css',
                sass: './sass',
                bundle_exec: true,
                environment: 'development'
            }))
            .on('error', onError)
            .pipe(autoprefixer({
                browsers: ['last 3 versions']
            }))
            .pipe(gulp.dest('./css'))
            .pipe(notify({ message: 'Styles task complete' }));
    });

    gulp.task('watch', function(){

        // WATCH STYLES
        gulp.watch('./sass/*.scss', function(){
            gulp.run('styles');
        });

        /*Linting is still way too strict, fix and implement later
        WATCH SCRIPTS*/
        gulp.watch(developmentRoot + '/.app/**/*.js', function(){
           gulp.run('lint');
        });
    });

    gulp.task('dev', ['webserver', 'styles', 'watch'], function(){});
