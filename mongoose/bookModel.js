const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    title: {type:String, required: [true, 'Title is required']},
    price: Number,
    stock: {type: Number, required: true},
    status: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
});
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;