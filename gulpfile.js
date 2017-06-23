var gulp=require('gulp');
var minihtml=require('gulp-minify-html');
var minicss=require('gulp-clean-css');
var minijs=require('gulp-uglify');
var concat=require('gulp-concat');
//压缩所有html
gulp.task('htmltask',function(){
	gulp.src('*.html')
	.pipe(minihtml())
	.pipe(gulp.dest('dist'))
})
//压缩所有css
gulp.task('csstask',function(){
	gulp.src('./css/*.css')
	.pipe(minicss())
	.pipe(gulp.dest('dist/css'))
})
//所有js压缩合并
gulp.task('jstask',function(){
	gulp.src('./js/*.js')
	.pipe(minijs())
	.pipe(concat('all.js'))
	.pipe(gulp.dest('dist/js'))
})


//监听
gulp.task('watchtask',function(){
	gulp.watch('*.html',['htmltask']);
	gulp.watch('./css/*.css',['csstask']);
	gulp.watch('./js/*.js',['jstask']);
});
