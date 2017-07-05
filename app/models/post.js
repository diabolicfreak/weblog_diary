var db = require('../../config/database');

var postSchema = new db.Schema({
    title: String,
    description: String
})

var Post = db.model('Post', postSchema);

module.exports = Post;
