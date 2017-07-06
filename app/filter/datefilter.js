var moment = require('moment');

module.exports = function(env){
    env.addFilter('formatDate', function(date, format) {
        return moment(date, ['YYYY-MM-DDTHH:mm:SSSZ']).format(format||'MM/DD/YYYY');
        console.log("nunjucks nunjucks");
    });
}
