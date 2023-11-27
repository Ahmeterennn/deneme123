var gulp = require('gulp')
var sass = require('gulp-sass')(require('sass'))

function buildStyles() {
  return gulp.src('./scsss/*.scss', { allowEmpty: true })
    .pipe(sass())
    .pipe(gulp.dest('.'))
}


exports.buildStyles = buildStyles

exports.watch = function () {
  gulp.watch('./scsss/*.scss',(done) => gulp.series('buildStyles')(done));
};