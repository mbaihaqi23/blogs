const postService = require("./post.service");

// Get all posts


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
      return res.json(recordPost);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "gagal!!!, sepertinya ada yang salah" });
    }
  };

  const postController = {
    //getAllPosts,
    createPost,
    //editPost,
  };
  
  module.exports = postController;