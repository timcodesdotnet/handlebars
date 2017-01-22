module.exports = function () {
    var root = './';
    var assetRoot = root + 'wwwroot/';
    var handlebarsRoot = assetRoot + 'templates/';

    var config = {
        templatePath: handlebarsRoot,
        templatePartialPath: handlebarsRoot + 'partials',
        templateOutputPath: handlebarsRoot + 'dist',
        templates: [
            handlebarsRoot + '**/*.hbs'
        ]
    };

    return config;
};