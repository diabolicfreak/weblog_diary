var app = require('express')();
require('./config')(app);
require('./app/routes')(app);

app.listen(process.env.PORT, function() {
    console.log('Node app is running at localhost:' + process.env.PORT);
});
