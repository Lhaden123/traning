const express = require("express");
const PORT = 3000;

const STATUS_CODES = {
  BAD_REQUEST: 400,
  OK: 200,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404
};

const app = express();
app.use(express.json());

const users = [
  {
    name: "Norbu",
    email: "norbul096@gmail.com",
    password: "Norbu@17633499",
  },
  {
    name: "susma",
    email: "gurungsusma@gmail.com",
    password: "hfdhhjjfndv",
  },
];
let loggedInUser = null;

const checkLoggedIn = (req, res, next) => {
  if (loggedInUser) {
    next();
  }

  res
    .status(STATUS_CODES.UNAUTHORIZED)
    .json({ message: "please login to access this route" });
};

app.get("/", (req, res) => {
  res.send(`welcome everyone has access to this`);
});

app.get("/protected", checkLoggedIn, (req, res) => {
  res.send(`The current loggedin user is ${JSON.stringify(loggedInUser)}`);
});

app.post("/login", (req, res) => {
  // check the body if it is valid
  if (!req.body) {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: "Body is Empty! please provide email and password" });
  }
  const { email, password } = req.body; // destructuring
  if (!email || !password) {
    res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: "please provide email and password" });
  }

  //check if the email is present in the users list
  const user = users.find((item) => item.email === email);
  if (!user) {
    return res
      .status(STATUS_CODES.NOT_FOUND)
      .json({ message: `The provided ${email} doesnot exists` });
  }

  // compare the password
  if (user.password !== password) {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: ` please provide correct password` });
  }

  loggedInUser = user;
  res.staus(STATUS_CODES.OK).JSON({ message: ` successfully Loggedin` });
});

app.delete("/logout", (req, res) => {
  loggedInUser = null;
  res.status(200).json({ message: "successfully loggedout" });
});

app.listen(PORT, () => {
  console.log(` server is running on http://localhost:${PORT}`);
});
