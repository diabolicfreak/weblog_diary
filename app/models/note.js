var db = require('../../config/components/database');

var noteSchema = new db.Schema({
    title: String,
    description: String
})

var Note = db.model('Post', noteSchema);

module.exports = Note;
