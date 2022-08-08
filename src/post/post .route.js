const express = require("express")
const postRouter = express.Router()
const tokenVerification = require("../middleware/token.verification")
const { Posts } = require("../database/models")


//create post
postRouter.post("/post", tokenVerification, async (req, res) => {
    const authUser = req.auth;
    const { title, image, body } = req.body;

    try { 
            const newPost = await Posts.create ({
            title,
            image,
            body,
            user_id : authUser.id,       
        })
        return res.json(newPost)
    } catch (error) {
        return res.status(500).json({ message: "Create post failed!" });
    }

})

// edit post
// postRouter.put("/post/:userId", tokenVerification, (req, res) => {
//     const { userId } = req.params;
//     const authUser = req.auth;
  
//     if (authUser.id != userId) {
//       return res.send("Gak boleh edit, id ini bukan punyamu");
//     }
  
//     return res.send(`Mau edit nama user, id ${userId}`);
//   });


module.exports = postRouter