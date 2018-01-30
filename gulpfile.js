// Dependencies
var gulp = require('gulp'),
		connect = require('gulp-connect-multi')(),
		argv = require('yargs').argv,
		runSequence = require('run-sequence'),
		pathExists = require('path-exists');
var $ = require('gulp-load-plugins')({
			pattern: ['gulp-*', 'gulp.*'],
			replaceString: /\bgulp[\-.]/
		});

var project = argv.project;

// Routes
paths = {
	dev: './dev',
	dist: './dist',
	base: './projects',
	project: './projects/'+project
};

files = {
	scss: {
		watch: 'dev/scss/**/*.scss',
		src : paths.dev + '/scss/*.scss',
		dist: paths.dist + '/css'
	},
	fonts: {
		watch: 'dev/fonts/**/*.{eot,svg,ttf,woff,woff2}',
		src: paths.dev + '/fonts/**/*.{eot,svg,ttf,woff,woff2}',
		dist: paths.dist +'/fonts'
	}
}

// Task
gulp.task('server', connect.server({
  root: ['dist'],
  port: 3001,
  livereload: true,
  open: {
    browser: 'Google Chrome'
  }
}));


gulp.task('html', function () {
  gulp.src('./dist/*.html')
    .pipe(connect.reload());
});

gulp.task('css', function() {
	gulp.src(files.scss.src)
	.pipe($.sass({outputStyle: 'expanded'}))
	.pipe($.autoprefixer())
	.pipe($.csso())
	.pipe(connect.reload())
	.pipe(gulp.dest(files.scss.dist));
});

gulp.task('fonts', function() {
	gulp.src(files.fonts.src)
		.pipe(gulp.dest(files.fonts.dist));
});

// Watching
gulp.task('watch', function () {
  gulp.watch(files.scss.watch, ['css']);
});

// Global task
gulp.task('default', ['server', 'watch','fonts']);

