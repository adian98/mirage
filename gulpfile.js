var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var rename = require("gulp-rename");
var watch = require('gulp-watch');

var files = {
    css: {
        vandor: [
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'bower_components/select2/dist/css/select2.min.css',
            'bower_components/codemirror/lib/codemirror.css',
            'bower_components/codemirror/addon/fold/foldgutter.css',
            'bower_components/codemirror/addon/dialog/dialog.css',
            'bower_components/codemirror/theme/monokai.css'
        ],
        custom: ['assets/css/*.css']
    },
    js: {
        vendor: [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js',
            'bower_components/select2/dist/js/select2.min.js',
            'bower_components/codemirror/lib/codemirror.js',
            'bower_components/codemirror/addon/search/searchcursor.js',
            'bower_components/codemirror/addon/search/search.js',
            'bower_components/codemirror/addon/dialog/dialog.js',
            'bower_components/codemirror/addon/edit/matchbrackets.js',
            'bower_components/codemirror/addon/edit/closebrackets.js',
            'bower_components/codemirror/addon/comment/comment.js',
            'bower_components/codemirror/addon/comment/comment.js',
            'bower_components/codemirror/addon/fold/foldcode.js',
            'bower_components/codemirror/addon/fold/foldgutter.js',
            'bower_components/codemirror/addon/fold/brace-fold.js',
            'bower_components/codemirror/addon/fold/xml-fold.js',
            'bower_components/codemirror/addon/fold/markdown-fold.js',
            'bower_components/codemirror/addon/fold/comment-fold.js',
            'bower_components/codemirror/mode/javascript/javascript.js',
            'bower_components/codemirror/keymap/sublime.js'
        ],
        custom: [
        ]
    }
};


gulp.task('vendorcss', function() {
    return gulp.src(files.css.vandor)
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('customcss', function() {
    return gulp.src(files.css.custom)
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('vendorjs', function() {
    return gulp.src(files.js.vendor)
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('dist/js'));
});


gulp.task('compact', ['customcss', 'vendorcss', 'vendorjs']);

gulp.task('watchfiles', function() {
    gulp.watch(files.css.custom, ['customcss']);
});

gulp.task('default', ['compact']);

gulp.task('watch', ['compact', 'watchfiles']);