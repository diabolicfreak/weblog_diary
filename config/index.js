var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');

require('dotenv').config();

module.exports = function(app, express){
    app.use(express.static(__dirname + '/../app/layout'));
    app.use(bodyParser.urlencoded({extended: true}))

    /**
     * Setup nunjucks
     */
    var PATH_TO_TEMPLATES = 'app/layout/view';
    var env = nunjucks.configure( PATH_TO_TEMPLATES, {
        autoescape: true,
        express: app
    });
    // Add filters
    require(__dirname + '/../app/filter/datefilter')(env);
}
