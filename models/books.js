const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    authors: {type: String, required: true},
    description: String,
    image: {type: String},
    link: {type: String, required: true},
    title: {type: String, required: true},
    bookId: String,
    saved: Boolean
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;