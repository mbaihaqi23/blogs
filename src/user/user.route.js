const express = require("express");
const tokenVerification = require("../middleware/token.verification");
const userRouter = express.Router();

const userController = require("./user.controller");

userRouter.post("/user/registration", userController.createUser);

// edit nama user
userRouter.put("/user/:userId", tokenVerification, (req, res) => {
  const { userId } = req.params;
  const authUser = req.auth;

  if (authUser.id != userId) {
    return res.send("Gak boleh edit, id ini bukan punyamu");
  }

  return res.send(`Mau edit nama user, id ${userId}`);
});


// contoh penggunaan jwt data yang sudah tervalidasi
// adlaah api untuk create post
userRouter.post("/posts", tokenVerification, (req, res) => {
  const { title, image, body } = req.body;
  const authUser = req.auth;

  const newPost = {
    title,
    image,
    body,
    user_id: authUser.id,
  };

  return res.json(newPost);
});

module.exports = userRouter;