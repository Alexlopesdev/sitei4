var gulp = require ("gulp");
var sass = require ("gulp-sass");

gulp.task('sass', function(){
    return gulp.src(['node_modules/bootstrap/scss/*.scss', 'custom/scss/*.scss'])
    .pipe(sass()) //Converter o SASS em CSS
    .pipe(gulp.dest('custom/css'));
});

gulp.task('watch', function(){
    gulp.watch(['node_modules/bootstrap/scss/*.scss', 'custom/scss/*.scss'],['sass'])
})

gulp.task('default', ['sass','watch']);