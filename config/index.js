var nunjucks = require('nunjucks');

require('dotenv').config();

 module.exports = function(app){
     var PATH_TO_TEMPLATES = 'app/layout/view' ;
     console.log('PATH_TO_TEMPLATESasda '+PATH_TO_TEMPLATES);
     nunjucks.configure( PATH_TO_TEMPLATES, {
         autoescape: true,
         express: app
     } ) ;
 }
