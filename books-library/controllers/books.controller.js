const booksService = require("../services/books.service");

const deleteBookById = async (req, res) => {
  const id = req.params.id;
  const isDeleted = await booksService.deleteBookById(id);
  if (isDeleted) {
    res.json({ message: `Book ${id} deleted successfully` });
  } else {
    res.status(404).json({ message: `Book with ${id} not found` });
  }
};

const getAllBooks = async (req, res) => {
  const books = await booksService.getAllBooks();
  res.json({ books });
};

const getBookById = async (req, res) => {
  const id = req.params.id;
  const book = await booksService.getBookById(id);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: `Book ${id} not found` });
  }
};

const createBook = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: `Body cannot be empty` });
  }
  const newBook = req.body;
  const keys = Object.keys(newBook);
  const requiredKeys = ["title", "author", "publishedYear"];
  const missingKeys = requiredKeys.filter((key) => !keys.includes(key));

  if (missingKeys.length > 0) {
    return res.status(400).json({
      message: `please provide all information: ${missingKeys.join(", ")}`,
    });
  }

  if (typeof newBook.publishedYear !== "number") {
    return res
      .status(400)
      .json({ message: `publishedYear should be in number` });
  }
  const createdBook = await booksService.createBook(req.body);
  res.status(201).json({ message: "New book added", book: createdBook });
};

const updateBookById = async (req, res) => {
  const id = req.params.id;
  if (!req.body) {
    return res.status(400).json({
      message: `Body cannot be empty`,
    });
  }

  const newBook = req.body;

  const keys = Object.keys(newBook);

  const requiredKeys = ["title", "author", "publishedYear"];
  const missingKeys = requiredKeys.filter((key) => !keys.includes(key));

  if (missingKeys.length > 0) {
    return res.status(400).json({
      message: `please provide all information: ${missingKeys.join(",")}`,
    });
  }
  if (typeof newBook.publishedYear !== "number") {
    return res.status(400).send("publishedYear must be valid number");
  }
  const updateBook = await booksService.updateBookById(id, newBook);

  if (updateBook) {
    res.json({
      message: ` Book ${id} updated successfully`,
      book: updateBook,
    });
  } else {
    res.status(404).json({ message: `Book  with ${id} not found` });
  }
};

module.exports = {
  deleteBookById,
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
};
