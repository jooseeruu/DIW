const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

function compilaSass(){
    return src('src/scss/*.scss')
    .pipe(sass())
    .pipe(dest('src/css'));
}

function watchFiles(){
    watch('src/scss/**/*.scss', compilaSass); 
}

function concatenaCSS(){
    return src('src/css/*.css')
    .pipe(concat('main.css'))
    .pipe(dest('dist'));
}

exports.compilaSass = compilaSass;
exports.watchFiles = watchFiles;
exports.concatenaCSS = concatenaCSS;

exports.default = series(compilaSass, concatenaCSS, watchFiles);
