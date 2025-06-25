const express = require("express");
const orderRoutes = require("./routes/order.route");
const productsRoutes = require("./routes/product.route");


const PORT = 3000;
const app = express();
app.use(express.json());

app.use("/order", orderRoutes);
app.use("/order",productsRoutes);

app.get("/health", (req, res) => {
  res.send("server is running and healthy");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
