const { readFile, writeFile } = require("../utils/file.util");
const { createJWTToken } = require("../utils/jwt.util");
const usersFilePath = "./data/users.json";
const User = require("../models/user.model");
const revokedTokensFilePath = "./data/revoked-tokens.json";
const RevokedToken = require("../models/revokedToken.model");
const { createHash, compareHash } = require("../utils/hash.util");

const signIn = async (data) => {
  const allUsers = await readFile(usersFilePath);
  const { email, password } = data;
  const user = await User.findOne({ email: email });

  if (!user) {
    return { userNotFound: true };
  }

  const ispasswordMatched = await compareHash(password, user.password);

  if (!ispasswordMatched) {
    return { passwordMisMatch: true };
  }

  delete user.password;
  const token = createJWTToken(user.toJSON());
  return { token };
};

const signUp = async (data) => {
  const { email } = data;
  const allUsers = await readFile(usersFilePath);

  const user = await User.findOne({ email: email });

  if (user) {
    return { userAlreadyExists: true };
  }

  data.password = await createHash(data.password);

  const newUser = new User(data);
  const savedUser = await newUser.save();

  return { User: savedUser };
};

const signout = async (token) => {
  const newToken = new RevokedToken({ token });
  await newToken.save();
};

module.exports = { signIn, signUp, signout };
