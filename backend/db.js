const mongoose = require('mongoose');
// const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://admin:9BXQgyu8QGN6mjh1@cluster0.5ban3pt.mongodb.net/';
mongoose.connect(uri)

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema);

module.exports = ({
    todo:todo
})