var gulp        = require('gulp');
// Require dependencies
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var shell = require('gulp-shell');
// Require dependencies
var browserSync = require('browser-sync');
var watch = require('gulp-watch');
// Require dependencies
// var sass = require('gulp-sass');
// var cssmin = require('gulp-cssmin')
//     // config      = require('./build.config.json');


//     gulp.task('message',function(){
//       return console.log('Gulp is running');
//     });

//     gulp.task('scripts', function () {
//       return gulp.src(config.scripts.files)
//         .pipe(concat(
//           'application.js'
//         ))
//         .pipe(gulpif(production, uglify()))
//         .pipe(gulpif(production, rename({
//           suffix: '.min'
//         })))
//         .pipe(gulp.dest(
//           config.scripts.dest
//         ))
//         .pipe(browserSync.reload({stream:true}));
//     });
// // Task: Handle images
// gulp.task('images', function () {
//   return gulp.src(config.images.files)
//     .pipe(gulpif(production, imagemin()))
//     .pipe(gulp.dest(
//       config.images.dest
//     ))
//     .pipe(browserSync.reload({stream:true}));
// });

// // Task: Handle Sass and CSS
// gulp.task('sass', function () {
//   return gulp.src(config.scss.files)
//     .pipe(sass())
//     .pipe(gulpif(production, cssmin()))
//     .pipe(gulpif(production, rename({
//       suffix: '.min'
//     })))
//     .pipe(gulp.dest(
//       config.scss.dest
//     ))
//     .pipe(browserSync.reload({stream:true}));
// });

//     // Task: Handle fonts
// gulp.task('fonts', function () {
//   return gulp.src(config.fonts.files)
//     .pipe(gulp.dest(
//       config.fonts.dest
//     ))
//     .pipe(browserSync.reload({stream:true}));
// });
//     // Install needed dependency
// //npm install gulp-clean;
 
// // Require dependency
// var clean = require('gulp-clean');

// // // Task: Clean:before
// // // Description: Removing assets files before running other tasks
// gulp.task('clean:before', function () {
//     return gulp.src(
//       config.assets.dest
//     )
//       .pipe(clean({
//         force: true
//       }))
//   });

//   // Task: patternlab
// // Description: Build static Pattern Lab files via PHP script
// gulp.task('patternlab', function () {
//   return gulp.src('', {read: false})
//     .pipe(shell([
//       'php core/builder.php -gpn'
//     ]))
//     .pipe(browserSync.reload({stream:true}));
// });
 
// // Task: styleguide
// // Description: Copy Styleguide-Folder from core/ to public
// gulp.task('styleguide', function() {
//   return gulp.src(config.patternlab.styleguide.files)
//     .pipe(gulp.dest(config.patternlab.styleguide.dest));
// });


// // task: BrowserSync
// // Description: Run BrowserSync server with disabled ghost mode
// gulp.task('browser-sync', function() {
//   browserSync({
//     server: {
//         baseDir: config.root
//     },
//     ghostMode: true,
//     open: "external"
//   });
// });

// // Task: Watch files
// gulp.task('watch', function () {
 
//   // Watch Pattern Lab files
//   gulp.watch(
//     config.patternlab.files,
//     ['patternlab']
//   );
 
//   // Watch scripts
//   gulp.watch(
//     config.scripts.files,
//     ['scripts']
//   );
   
//   // Watch images
//   gulp.watch(
//     config.images.files,
//     ['images']
//   );
 
//   // Watch Sass
//   gulp.watch(
//     config.scss.files,
//     ['sass']
//   );
 
//   // Watch fonts
//   gulp.watch(
//     config.fonts.files,
//     ['fonts']
//   );
// });

// // Task: Default
// // Description: Build all stuff of the project once
// gulp.task('default', ['clean:before'], function () {
//   production = false;
 
//   gulp.start(
//     'patternlab',
//     'styleguide',
//     'fonts',
//     'sass',
//     'images',
//     'scripts'
//   );
// });

// // Task: Start your production-process
// // Description: Typ 'gulp' in the terminal
// gulp.task('serve', function () {
//   production = false;
 
//   gulp.start(
//     'browser-sync',
//     'default',
//     'watch'
//   );
// });
//changes added by anooj