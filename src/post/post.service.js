const postRepo = require("./post.repo");

const getAllPost = async () => {
  return await postRepo.getAllPost();
}

const getPostbyId = async (id) => {
  return await postRepo.getPostbyId(id)
}

const createPost = async ({ title, image, body, userId }) => {
    return postRepo.createPost({ title, image, body, userId });
  };

const editPost = async ({ title, image, body, postId }) => {
    return await postRepo.editPost({ title, image, body, postId });
};

const detailPost = async (postId) => {
  return await postRepo.detailPost(postId)
}

const deletePost = async (postId) => {
  return await postRepo.deletePost(postId)
}

  const postService = {
    getAllPost,
    getPostbyId,
    createPost,
    editPost,
    deletePost,
    detailPost
  };
  
  module.exports = postService;