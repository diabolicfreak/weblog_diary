var Post = require('./models/post');
var bodyParser = require('body-parser');


module.exports = function(app){
    app.use(bodyParser.urlencoded({extended: true}))
    app.set('view engine', 'ejs');

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
}
