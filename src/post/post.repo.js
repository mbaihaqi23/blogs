const { Posts } = require("../database/models");

const getAllPost = async() => {
  return await Posts.findAll()
}


const createPost = async ({ title, image, body, userId }) => {
    return await Posts.create({ title, image, body, userId });
  };


const editPost = async ({ title, image, body, postId }) => {
    return await Posts.update({ title, image, body},{
      where: {
        id: postId
      },
      returning: true
    });
  };  


  const postRepo = {
    getAllPost,
    createPost,
    editPost,
  };
  
  module.exports = postRepo