const express = require("express")
const tokenVerification = require("../middleware/token.verification")
const postRouter = express.Router()
const {Posts} = require("../database/models")

//create post
postRouter.post("/posts", tokenVerification, async (req, res) => {
    const authUser = req.auth;
    const { title, image, body} = req.body;

    const newPost = await Posts.create ({
        title,
        image,
        body,
        user_id : authUser.id,
    })

    return res.json(newPost)
})

module.exports = postRouter