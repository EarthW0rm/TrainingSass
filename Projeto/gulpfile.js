var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function(){
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css/'));
});
    
gulp.task('listen', function(){
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('server-dev', function(){
    //Esse cara inicia o server do browserSync
    browserSync.init({
        server:{
            baseDir: 'src'
        }
    });

    //O m'etodo browserSync.reload updata o browser na alteraco do arquivo
    gulp.watch('./src/**/*').on('change', browserSync.reload);

    gulp.watch('./src/sass/**/*.scss', ['sass']);

});