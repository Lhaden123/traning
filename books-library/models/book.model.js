const mongoose = require("mongoose");

const BookSchema =new mongoose.Schema({
title: String,
author: String,
publishedYear: Number,
});

const Book = mongoose.model("book", BookSchema);
module.exports = Book;