require('dotenv').config()
var app = require('express')();

var Post = require('./app/models/post');

app.listen(process.env.PORT, function() {
    console.log('Node app is running at localhost:' + process.env.PORT);
});

app.get('/', function(req, res){
    console.log(req);

    res.send('Whoooo');
});


app.post('/post/create', function(req, res){
    console.log(req.body)

    var post = new Post(req.body);
    post.save(function(err){
        if(err) console.log('Error on saving post');
        console.log('Post saved successfully');
    })
});
