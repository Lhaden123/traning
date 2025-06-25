const express = require("express");
const booksRoutes = require("./routes/books.routes");
const authRoutes = require("./routes/auth.route");
const connectMongoDB = require("./db/mongo.db");
const PORT = 3000;

const app = express();
connectMongoDB();
app.use(express.json());

app.use("/books", booksRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
