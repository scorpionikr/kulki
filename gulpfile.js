const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require('gulp-sourcemaps');

gulp.task("sass", function() {
    return gulp.src('scss/main.scss')
        .pipe(sourcemaps.init())
        //mapa wyzej
        .pipe(sass({errLogToConsole: true, outputStyle: 'compressed'}))
        .pipe(sourcemaps.write())
        //mapa wyzej
        .pipe(gulp.dest('css'))
});

gulp.task("watch", function() {
    gulp.watch("scss/**/*.scss", gulp.series("sass"))
//    wszystkie pliki w podkatalogu scss
});

gulp.task('default', gulp.series('watch'));