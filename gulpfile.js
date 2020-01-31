const webpack = require('webpack-stream');
const gulp = require('gulp');
const webpackConf = require('./webpack.config.js');
// require gulp module

const OUT_DIR = './build';
// create a task to copy static html to the build folder
gulp.task('copy:html', () => gulp.src('./app/index.html').pipe(gulp.dest(OUT_DIR)));
// copy css to build folder
gulp.task('copy:css', () => gulp.src('./app/css/mystyles.css').pipe(gulp.dest(`${OUT_DIR}/css/`)));
// if any assets are present, copy them to the build folder as well
// gulp.task('copy:assets', () => gulp.src('./app/assets/*').pipe(gulp.dest(OUT_DIR + '/assets/')));
gulp.task('webpack', () => gulp.src('build/')
  .pipe(webpack(webpackConf))
  .pipe(gulp.dest('build/js/')));

gulp.task('default', gulp.parallel('copy:html', 'copy:css', 'webpack'));
