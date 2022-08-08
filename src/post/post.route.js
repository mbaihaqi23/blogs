const express = require("express")
const tokenVerification = require("../middleware/token.verification")
const postRouter = express.Router()

const postController = require("./post.controller")


// API - Get all posts
postRouter.get("/posts",  postController.getAllPost);

// API - Create post
postRouter.post("/posts", postController.createPost);

module.exports = postRouter