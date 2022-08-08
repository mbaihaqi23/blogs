const express = require("express")
const tokenVerification = require("../middleware/token.verification")
const postRouter = express.Router()

const postController = require("./post.controller")


// API - Get all posts
postRouter.get("/posts",  postController.getAllPost);

// API - Create post
postRouter.post("/posts", tokenVerification, postController.createPost);

// API - Edit post
postRouter.put('/post/:postId', tokenVerification, postController.editPost)

module.exports = postRouter