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

// Get post by postId
const getPostbyId = async (req, res) => {
  const { writer } = req.query;
  const authUser = req.auth;

  if(authUser.id == writer) {
      // return res.send(`hi ${authUser.email}, you can get your posts`);
      const writerPost = await postService.getPostbyId(writer)
      return res.json(writerPost)
  }

  return res.send(`tidak boleh`);
}

//create post
const createPost = async (req, res) => {
  const authUser = req.auth;
  const { writer } = req.query;
  const { title, image, body } = req.body;
  

  if(authUser.id == writer) {
      const createdPost = await postService.createPost({title, image, body, user_id: writer})
      return res.json(createdPost)
  }

  return res.send("access denied");
}

  //edit post
const editPost = async (req, res) => {
  const {postId} = req.params
  const {writer} = req.query
  const {title, image, body} = req.body
  const authUser = req.auth

  if(authUser.id == writer){
    const editPost = await postService.editPost({title, image, body, postId})
    return res.json(editPost)
  }

  return res.send("tidak boleh")
}

// detail post
const detailPost = async(req, res) => {
  const { postId } = req.params;
  const detailPost = await postService.detailPost(postId)
  return res.json(detailPost)
}


// delete post
const deletePost = async(req, res) => {
  const { postId } = req.params;
  const { writer } = req.query;
  const authUser = req.auth;

  if(authUser.id == writer) {
      const deletedPost = await postService.deletePost(postId)
      return res.json(deletedPost)
  }

  return res.send("tidak boleh");
}


  const postController = {
    getAllPost,
    getPostbyId,
    createPost,
    editPost,
    detailPost,
    deletePost
  };
  
  module.exports = postController;