// Importo los módulos de gulp
import { series, src, dest, watch } from 'gulp';
const sass = require('gulp-sass')(require('sass'));
const minCSS = require('gulp-clean-css');
const minJS = require('gulp-uglify');
const concat = require('gulp-concat');

/**
 * Minimiza los archivos CSS de la carpeta src/css y los guarda en la carpeta dist/css
 */
function minimizaCSS(){
  return src('src/css/*.css')
  .pipe(minCSS())
  .pipe(dest('dist/css'));
}

/**
 * Minimiza los archivos JS de la carpeta src/js y los guarda en la carpeta dist/js
 */
function minimizaJS(){
  return src('src/js/*.js')
  .pipe(minJS())
  .pipe(dest('dist/js'));
}

/**
 * Compila los archivos SCSS de la carpeta src/sass y los guarda en la carpeta src/css
 */
function compilarSCSS(){
  return src('src/sass/*.scss')
  .pipe(sass())
  .pipe(dest('src/css'));
}

/**
 * Observa los cambios en los archivos SCSS de la carpeta src/sass y ejecuta la función compilarSCSS
 */
function watcher(){
  watch('src/sass/*.scss',compilarSCSS);
}

/**
 * Concatena los archivos CSS de la carpeta dist/css y los guarda en la misma carpeta con el nombre all.css
 */
function concatenarCSS(){
  return src('dist/css/*.css')
  .pipe(concat('all.css'))
  .pipe(dest('dist/css'));
}

/**
 * Concatena los archivos JS de la carpeta dist/js y los guarda en la misma carpeta con el nombre all.js
 * 
 */
function concatenarJS(){
  return src('dist/js/*.js')
  .pipe(concat('all.js'))
  .pipe(dest('dist/js'));
}

// Exporta las funciones como tareas de gulp
exports.minimizacss = minimizaCSS
exports.minimizajs = minimizaJS
exports.sass = compilarSCSS;
exports.watcher = watcher;
exports.concatCSS = concatenarCSS;
exports.concatJS = concatenarJS;
// Tarea que ejecuta todas las funciones anteriores en serie
exports.kittens = series(minimizaCSS, minimizaJS, compilarSCSS, concatenarCSS, concatenarJS);
