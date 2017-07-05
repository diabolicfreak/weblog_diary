require('dotenv').config()
var app = require('express')();

app.listen(process.env.PORT, function() {
    console.log('Node app is running at localhost:' + process.env.PORT);
});
