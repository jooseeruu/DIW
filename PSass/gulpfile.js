const gulp = require('gulp');
const { src, dest, watch } = gulp;
const sass = require('gulp-sass')(require('sass'));


function compilaSCSS(){
    return src('src/scss/*.scss')
    .pipe(sass())
    .pipe(dest('src/css'));
  }

function watchFiles(){
    watch('src/scss/*.scss', compilaSCSS);
}

exports.compilaSCSS = compilaSCSS;
exports.watchFiles = watchFiles;

