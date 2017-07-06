var express = require('express');
var app = express();

require('./config')(app, express);
require('./app/routes')(app);

app.listen(process.env.PORT, function() {
    console.log('Node app is running at localhost:' + process.env.PORT);
});
