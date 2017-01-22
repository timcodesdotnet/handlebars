/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var handlebars = require('handlebars');
var config = require('./gulp.config')();
var gulpHandlebars = require('gulp-handlebars-html')(handlebars);
var regexRename = require('gulp-regex-rename');
var replace = require('gulp-replace');

gulp.task('compileHtml', function () {
    var templateData = {

    },
    options = {
        partialsDirectory: [config.templatePartialPath]
    };

    return gulp.src(config.templatePath + "*.page.hbs")
               .pipe(gulpHandlebars(templateData, options))
               .pipe(regexRename(/\.page\.hbs$/, ".html"))
               .pipe(replace(/\uFEFF/ig, "")) //cut out zero width nbsp characters the compiler adds in
               .pipe(gulp.dest(config.templateOutputPath));
});

gulp.task('compileHtml:watch', function () {
    return gulp.watch(config.templates, ['compileHtml']);
});