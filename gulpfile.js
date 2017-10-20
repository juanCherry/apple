//引入要使用的gulp插件(压缩js文件 gulp-uglify)
var gulp_uglify = require('gulp-uglify');
//要引入的压缩html文件的gulp插件
var gulp_htmlmin = require('gulp-htmlmin');
//压缩css文件的gulp插件
var minifycss = require('gulp-minify-css');
// //引入gulp模块
var gulp = require('gulp');
//引入重命名文件的模块
var gulp_rename = require('gulp-rename');
//task表示开启任务
gulp.task('default',function (){
    gulp.src('./**/*.js')
        .pipe(gulp_uglify())
        .pipe(gulp.dest('./min'));
})
gulp.task('testHtmlmin',function (){
    gulp.src('./*.html')
        .pipe(gulp_htmlmin())
        .pipe(gulp.dest('./min'));
})
gulp.task('minifycss', function() {
      gulp.src('./**/*.css')
          .pipe(minifycss())
          .pipe(gulp.dest('./min'));
});
