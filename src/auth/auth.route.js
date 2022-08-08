require("dotenv").config();
const express = require("express");
const authRouter = express.Router();
const { User } = require("../database/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

authRouter.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const existUser = await User.findOne({ where: { email }, raw: true });
  
  //   kalau gak ada response not found
  if (!existUser) return res.status(404).json({ message: "User not found" });

  //   kalau ada cek password
  const isPasswordCorrect = await bcrypt.compare(password, existUser.password);
  if (isPasswordCorrect) {

    //contoh penggunaan jwt data middleware
    // generete token
    const token = await jwt.sign(
      {
      id: existUser.id,
      fullname: existUser.fullname,
      email:existUser.email,
    },
    process.env.JWT_SECRETE_TOKEN,
    {expiresIn: "1d"}
    )
    return res.json({accesToken: token});
  } else {
    return res.send("Login failed");
  }
 
});

module.exports = authRouter;
