const authService = require("../services/auth.service");

const signIn = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      message: `Body cannot be empty!`,
    });
  }
  const keys = Object.keys(req.body);
  const requireKeys = ["email", "password"];
  const missingKeys = requireKeys.filter((key) => !keys.includes(key));

  if (missingKeys.length > 0) {
    return res.status(400).json({
      message: `Please provide all information: ${missingKeys.join(", ")}`,
    });
  }
  const result = await authService.signIn(req.body);
  console.log(result);

  if (result.userNotFound) {
    return res.status(404).json({
      message: `User not found with the provided email ${req.body.email}`,
    });
  }

  if (result.passwordMisMatch) {
    return res.status(400).json({
      message: `The password you have provided is incorrect`,
    });
  }
  res.json({ token: result.token });
};

const signUp = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      message: `Body cannot be empty!`,
    });
  }

  const keys = Object.keys(req.body);
  const requireKeys = ["name", "age", "email", "password"];
  const missingKeys = requireKeys.filter((key) => !keys.includes(key));

  if (missingKeys.length > 0) {
    return res.status(400).json({
      message: `Please provide all information: ${missingKeys.join(", ")}`,
    });
  }

  const { email, password } = req.body;
  if (password.length < 5) {
    return res
      .status(400)
      .json({ message: ` The password must be more 5 chars` });
  }

  const result = await authService.signUp(req.body);

  if (result.userAlreadyExists) {
    return res.status(400).json({
      message: `user with ${email} already exits`,
    });
  }

  res.status(201).json({
    message: ` User with ${email} created successfully`,
  });
};

const signOut = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  await authService.signout(token);

  res.status(204).json({
    message: ` Signout successfully`,
  });
};
module.exports = { signIn, signUp, signOut };
