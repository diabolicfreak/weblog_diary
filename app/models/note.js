var db = require('../../config/components/database');

var noteSchema = new db.Schema({
    title: String,
    description: String,
    date: {type: Date, default: Date.now()}
},{
    timestamps: true
});

var Note = db.model('Post', noteSchema);

module.exports = Note;
