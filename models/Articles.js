const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: { type: String },
    abstract: { type: String },
    url: { type: String },
    date: { type: Date, default: Date.now }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;