const gulp = require('gulp');
const gulpScss = require('gulp-css-preprocessor');
const csscomb = require('gulp-csscomb');
const autoprefixer = require('gulp-autoprefixer');
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');
const uglyfly = require('gulp-uglyfly');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
//const concatCss = require('gulp-concat-css');

//1. scss 编译  格式化 兼容  压缩
gulp.task('style',function () { 
    return gulp.src(['src/css/*.scss','!src/css/_*.scss'])
    .pipe(gulpScss())
//  .pipe(autoprefixer({
//    browsers: ['Android 2.3',
//    'Android >= 4',
//    'Chrome >= 20',
//    'Firefox >= 24', // Firefox 24 is the latest ESR 
//    'Explorer >= 8',
//    'iOS >= 6',
//    'Opera >= 12',
//    'Safari >= 6'],
//          cascade: false
//    
//  }))
//  .pipe(csscomb())
//  .pipe(uglifycss())
    //.pipe(concatCss('style.css'))
    .pipe(gulp.dest('dest/css'))
});

//2.JS 合并   压缩   混淆
gulp.task('script',function () {  
    gulp.src(['src/js/*.js','!src/js/iscroll.js'])
//  .pipe(uglyfly({
//  	mangle: {except: ['require' ,'exports' ,'module' ,'$','ev']}//排除混淆关键字
//  }))
    .pipe(gulp.dest('dest/js'))

})

//3.图片复制
gulp.task('image',function () {  
    gulp.src('src/img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dest/img'))

})

//4.html压缩
gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dest'))
});

//5.浏览器
var reload = browserSync.reload;
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./dest/"
        }
    });
    gulp.watch("src/*.html",['html']).on("change", reload);
    gulp.watch("src/js/*.js",['script']).on("change", reload);
    gulp.watch("src/css/*.scss",['style']).on("change", reload);
    gulp.watch("src/img/*.*",['image']).on("change", reload);
});

//4.字体
gulp.task('fonts',function(){
    gulp.src('src/fonts/*.*')
    .pipe(gulp.dest('dest/fonts'))
});
