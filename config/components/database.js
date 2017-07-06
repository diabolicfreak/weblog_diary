var mongoose = require('mongoose');

var dbUri = 'mongodb://localhost:27017/'+process.env.DB;

mongoose.Promise = require('bluebird');
mongoose.connection.openUri(dbUri, function(err, res){
    if (err) {
        console.log ('ERROR connecting to: ' + dbUri + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + dbUri);
    }
});

module.exports = mongoose;
