var Note = require('../models/note');

module.exports.index = function(req, res){
    Note.find({}, null, {sort: '-date'}, function(err, notes){
        if(err) console.log('Encontered an error while fetching notes' + err);
        res.render('note/index.html', {notes: notes});
    });
}

module.exports.create = function(req, res){
    res.render('note/create.html', {action: 'create'});
}

module.exports.save = function(req, res){
    var note = new Note(req.body);
    note.save(function(err){
        if(err) console.log('Error on saving post');
        console.log('Note saved successfully');
        return res.redirect('/note');
    });
}

module.exports.get = function(req, res){
    Note.findOne({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
}

module.exports.edit = function(req, res){
    Note.findOne({_id: req.params.id}, function(err, note) {
        if (!err) {
            return res.render('note/create.html', {note: note, action: req.params.id+'/edit'});
        } else {
            return res.send(err); // 500 error
        }
    });
}

module.exports.update = function(req, res){
    console.log("req.body "+req.body);
    // var note = new Note(req.body);
    Note.update(req.params.id, {$set: req.body}, function(err, result){
        if(err) console.log('Error on saving post'+result);
        console.log('Note updated successfully' + result);
        return res.redirect('/note');
    });
}

module.exports.delete = function(req, res){
    var note = new Note(req.body);
    note.save(function(err){
        if(err) console.log('Error on saving post');
        console.log('Note delted successfully');
        return res.redirect('/note');
    });
}
