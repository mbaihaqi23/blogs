const postRepo = require("./post.repo");

const createPost = async ({ title, image, body, userId }) => {
    return postRepo.createPost({ title, image, body, userId });
  };

  const postService = {
    // getAllPosts,
    createPost,
    //editPost,
  };
  
  module.exports = postService;