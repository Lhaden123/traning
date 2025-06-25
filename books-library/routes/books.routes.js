const express = require("express");
const fs = require("node:fs/promises");
const { readFile, writeFile } = require("../utils/file.util");
const verifyAuth = require("../middlewares/verifyAuth.middleware");
const bookController = require("../controllers/books.controller");
const booksRoutes = express.Router();
const filePath = "./data/books.json";

booksRoutes.get("/", bookController.getAllBooks);
booksRoutes.get("/:id", bookController.getBookById);
booksRoutes.post("/", verifyAuth, bookController.createBook);
booksRoutes.put("/:id", verifyAuth, bookController.updateBookById);

booksRoutes.delete("/:id", verifyAuth, async (req, res) => {
  let books = await readFile(filePath);
  const id = Number(req.params.id);
  const book = books.find((item) => item.id === id);

  if (book) {
    books = books.filter((item) => item.id !== id);
    await writeFile(filePath, books);
    res.json({ message: `Book ${id} deleted successfully` });
  } else {
    res.status(404).json({ message: `Book with ${id} not found` });
  }
});

module.exports = booksRoutes;
