const { series, src, dest } = require('gulp');

const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

function concatstyles() {
  return src('app/**/*.css')
    .pipe(concat('all.css'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(dest('dist/concat'));
}

function mincss() {
  return src('app/style/style.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(dest('test/style/'));
}

function clean(cb) {
  console.log('Clean task');
  cb();
}

function build(cb) {
  console.log('Build task');
  cb();
}

function test() {
  return src(['app/**/*.css', 'app/*.html']).pipe(dest('dist/'));
}

exports.test = test;
exports.build = build;
exports.concatstyles = concatstyles;
exports.mincss = mincss;
exports.default = series(clean, build, test);
