const { Posts } = require("../database/models");

const createPost = async ({ title, image, body, userId }) => {
    return await Posts.create({ title, image, body, userId });
  };


  const postRepo = {
    // getAllPosts,
    createPost,
    /// editPost,
  };
  
  module.exports = postRepo