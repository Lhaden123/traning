const express = require("express");


const PORT = 3000;

const app = express();
app.use(express.json());


app.get("/health", (req, res) => {
  res.send("server is running and healthy");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});