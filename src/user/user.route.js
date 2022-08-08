const express = require("express");
const authRouter = require("../auth/auth.route");
const tokenVerification = require("../middleware/token.verification");
const userRouter = express.Router();

const userController = require("./user.controller");

//registration
userRouter.post("/user/registration", userController.createUser);

module.exports = userRouter;