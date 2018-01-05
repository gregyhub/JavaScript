
// -- Importation des Plugins
const gulp          = require('gulp');
const sass          = require('gulp-sass');
const sourcemaps    = require('gulp-sourcemaps');
const cleanCSS      = require('gulp-clean-css');
const rename        = require('gulp-rename');
const autoprefixer  = require("gulp-autoprefixer");
const ts            = require('gulp-typescript');
const runsequence   = require('run-sequence');

// -- Tâche "minify-css" qui permet de minifier mon CSS
gulp.task('minify-css', () => {
    return gulp.src(['./dist/**/*.css', '!./dist/**/*.min.css'])
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist'));
});

// -- Tâche "sass" qui permet la compilation du scss en css
gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer("last 2 versions", "> 1%", "Explorer 7", "Android 2"))
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'));
});

// -- Tâche "typescript" qui permet la compilation du ts en js
gulp.task('typescript', function () {
    return gulp.src('./src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'main.js'
        }))
        .pipe(gulp.dest('./dist'));
});

// -- Ecouteur Gulp
gulp.task('watch', () => {
    gulp.watch('./src/**/*.scss', () => {
        runsequence('sass', 'minify-css');
    })
})