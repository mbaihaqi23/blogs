const express = require("express")
const tokenVerification = require("../middleware/token.verification")
const postRouter = express.Router()

const postController = require("./post.controller")


// API - Get all posts
postRouter.get("/post/:postId",  postController.getPostbyId);

// API - Get post by postId
postRouter.get("/post",  postController.getAllPost);

// API - Create post
postRouter.post("/post", tokenVerification, postController.createPost);

//  API - Edit
postRouter.put('/post/:postId', tokenVerification, postController.editPost)

// API - detail posts
postRouter.get("/post/:postId",  postController.detailPost);

// API - delete posts
postRouter.get("/post/:postId",  postController.deletePost);

module.exports = postRouter