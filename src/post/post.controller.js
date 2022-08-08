const postService = require("./post.service");

// Get all posts
const getAllPost = async (req, res) => {
  try {
      const allPost = await postService.getAllPost()
      return res.json(allPost)
  } catch (error) {
      return res.status(500).json({ message: "error" })
  }
}

//create post
const createPost = async (req, res) => {
    const { title, image, body } = req.body;
    const authUser = req.auth;
    try {
      const userId = authUser.id;
      const recordPost = await postService.createPost({
        title,
        image,
        body,
        userId,
      });
      return console.log(recordPost);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "salah bro" });
    }
  };

  const postController = {
    getAllPost,
    createPost,
    //editPost,
  };
  
  module.exports = postController;