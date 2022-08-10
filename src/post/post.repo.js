const { Posts } = require("../database/models");

const getAllPost = async() => {
  return await Posts.findAll()
}

const getPostbyId = async(id) => {
  return await Post.findAll({
      where: {
          user_id: id
      }
  })
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
  
  const detailPost = async (postId) => {
    return await Post.findAll({
        where: {
            id: postId
        }
    })
}

const deletePost = async (postId) => {
    return await Post.destroy({
        where: {
            id: postId
        }
    })
}


  const postRepo = {
    getAllPost,
    getPostbyId,
    createPost,
    editPost,
    detailPost,
    deletePost
  };
  
  module.exports = postRepo