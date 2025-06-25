const express = require("express");


const orderRoutes = express.Router();

const logger = (req, res, next) =>{
    console.log("order Routes");
    next();
};

orderRoutes.use(logger);


orderRoutes.get("/", (req, res) => res.send("Get all orders"));
orderRoutes.get("/:id", (req,res) =>
    res.send(`Get order ${req.params.id}`)
);

orderRoutes.post("/", (req,res) => res.send("create order"));
orderRoutes.put("/:id", (req,res) =>
    res.send(`update order ${req.params.id}`)

);


orderRoutes.delete("/:id", (req,res) =>
    res.send(`delete order ${req.params.id}`)

);

module.exports = orderRoutes;