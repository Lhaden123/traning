const Book = require("../models/book.model");

const deleteBookById = async (id) => {
  const deleted = await Book.deleteOne({ _id: id });

  if (deleted.deletedCount > 0) {
    return true;
  } else {
    return false;
  }
};

const getAllBooks = async () => {
  const books = await Book.find();
  return books;
};

const getBookById = async (id) => {
  const book = await Book.findOne({ _id: id });
  return book;
};

const createBook = async (newBook) => {
  const book = new Book(newBook);
  const savedBook = await book.save();
  console.log(savedBook);
  return savedBook;
};

const updateBookById = async (id, newBook) => {
  const update = await Book.updateOne({ _id: id }, { $set: newBook });
  if (update.matchedCount > 0) {
    const updatedBook = await Book.findOne({ _id: id });
    return updatedBook;
  } else {
    return;
  }
};

module.exports = {
  deleteBookById,
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
};
