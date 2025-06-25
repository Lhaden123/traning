const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");
const createJWTToken = (data) => {
  return jwt.sign(data, jwtSecret);
};

const verifyJWToken = (token) => {
  try {
    const decoded = jwt.verify(token, jwtSecret);
    return decoded;
  } catch (err) {
    console.log(err);
    return { error: true, message: err.message };
  }
};

module.exports = { createJWTToken, verifyJWToken };
