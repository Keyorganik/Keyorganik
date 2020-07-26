'use strict';
 
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
 
function image() {
  return  gulp.src('./img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
}

// /*function watchTasks() {
//   gulp.watch('./src/sass/**/*.scss', css);
// }*/ eyv


exports.default = gulp.series(
  image
);