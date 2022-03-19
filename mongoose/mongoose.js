const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/latihan')

const db = mongoose.connection;

const bookSchema = new mongoose.Schema({
    title: String,
    price: Number,
    stock: Number,
    status: Boolean,
});

const Book = mongoose.model('Book', bookSchema);
db.on("error", console.error.bind(console, "connection error"));

db.once('open', async () => {
    console.log('Connected to mongodb');

    //menampilkan data buku
    const book = await Book.find().select('price').limit(2);
    console.log(book);

    //menambahkan buku
    // const book = new Book({
    //     title: 'Harry Potter',
    //     price: 100000,
    //     stock: 20,
    //     status: true,
    // })

    // await book.save();

    // console.log(book);

    //cara kedua

    // const book = await Book.create({
    //     title: 'belajar React Js',
    //     price: 10000,
    //     stock: 30,
    //     status: false,
    // })
    // console.log(book)

    //filter
    // const book = await Book.find({status: true});
    // console.log(book);

    //Mencari berdasarkan id
    // const book = await Book.findById("6235f6bfaf57188bf20b9a42")
    // console.log(book);

    //delete
    // const book = await Book.findByIdAndDelete("6235f7ad553c5e2fd3ffe73a")
    // console.log(book);
});
