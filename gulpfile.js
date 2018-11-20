let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'); //автообновление страницы с проектом в браузере

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () { //автообновление страницы с проектом в браузере
    browserSync({
        server:{
            baseDir: 'app'
        },
    })
});

gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
