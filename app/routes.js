var Note = require('./controller/note');

module.exports = function(app){

    app.get('/', function(req, res){
        res.render('home.html');
    });

    app.get('/note', Note.index);

    app.get('/note/create', Note.create);
    app.post('/note/create', Note.save);

    app.get('/note/:id', Note.get);

    app.get('/note/:id/edit', Note.edit);
    app.post('/note/:id/edit', Note.update);

    app.get('/note/:id/delete', Note.delete);
}
