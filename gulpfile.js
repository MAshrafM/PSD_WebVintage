var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Compile all the .scss files from
// ./scss to ./css
gulp.task('scss', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

// Watches for file changes
gulp.task('watch', function(){
  gulp.watch('./scss/**/*.scss', ['scss']);
});

gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch("*.html").on('change', browserSync.reload);
});


gulp.task('default', ['scss', 'watch', 'serve']);