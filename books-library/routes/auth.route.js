const express = require("express");
const { readFile, writeFile } = require("../utils/file.util");
const { createJWTToken } = require("../utils/jwt.util");
const verifyAuth = require("../middlewares/verifyAuth.middleware");
const authController = require("../controllers/auth.controller");

const authRoutes = express.Router();
const usersFilePath = "./data/users.json";

authRoutes.get("/health", (req, res) => {
  res.send(`Auth route is healthy`);
});

authRoutes.post("/signin", authController.signIn);

authRoutes.post("/signup", authController.signUp);

authRoutes.delete("/signout", verifyAuth, authController.signOut);

module.exports = authRoutes;
