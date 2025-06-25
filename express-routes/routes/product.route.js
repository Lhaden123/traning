const express = require("express");


const productRoutes = express.Router();

const logger = (req, res, next) =>{
    console.log("product Routes");
    next();
};

productRoutes.use(logger);


productRoutes.get("/", (req, res) => res.send("Get all products"));
productRoutes.get("/:id", (req,res) =>
    res.send(`Get product ${req.params.id}`)
);

productRoutes.post("/", (req,res) => res.send("create product"));
productRoutes.put("/:id", (req,res) =>
    res.send(`Get product ${req.params.id}`)

);


productRoutes.delete("/:id", (req,res) =>
    res.send(`delete product ${req.params.id}`)

);

module.exports = productRoutes;
