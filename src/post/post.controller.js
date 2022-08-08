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

  //edit post
  // const editPost = async (req, res) => {
  //   const { userId } = req.params;
  //   const authUser = req.auth;
  
  //   if (authUser.id != userId) {
  //     return res.send("Gak boleh edit, id ini bukan punyamu");
  //   }
  
  //   return res.send(`Mau edit nama user, id ${userId}`);
  // };

  const postController = {
    getAllPost,
    createPost,
    //editPost,
  };
  
  module.exports = postController;