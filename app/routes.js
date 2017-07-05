var Note = require('./models/note');
var bodyParser = require('body-parser');


module.exports = function(app){
    app.use(bodyParser.urlencoded({extended: true}))
    app.set('view engine', 'ejs');

    app.get('/', function(req, res){
        var data = {
            title: 'Andsssaay',
            description: 'Neale Neale Neale NealeNeale Neale'
        } ;
        res.render('home.html', {data: data});
    });

    app.get('/note', function(req, res){
        Note.find({}, function(err, notes){
            if(err) console.log('Encontered an error while fetching notes' + err);
            res.render('note/index.html', {notes: notes});
        });
    });

    app.get('/note/create', function(req, res){
        res.render('note/create.html');
    });

    app.post('/note/create', function(req, res){
        var note = new Note(req.body);
        note.save(function(err){
            if(err) console.log('Error on saving post');
            console.log('Note saved successfully');
            return res.redirect('/note');
        })
    });
}
