const express = require("express");
const authRouter = require("./src/auth/auth.route");
const tokenVerification = require("./src/middleware/token.verification");
const userRouter = require("./src/user/user.route");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;

app.use(express.json());

// app.use(tokenVerification)
app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.use(userRouter);
app.use(authRouter);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
