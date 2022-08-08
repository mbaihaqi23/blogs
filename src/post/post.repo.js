const { Posts } = require("../database/models");

const getAllPost = async() => {
  return await Posts.findAll()
}

const createPost = async ({ title, image, body, userId }) => {
    return await Posts.create({ title, image, body, userId });
  };


  const postRepo = {
    getAllPost,
    createPost,
    /// editPost,
  };
  
  module.exports = postRepo