const postRepo = require("./post.repo");

const getAllPost = async () => {
  return await postRepo.getAllPost();
}

const createPost = async ({ title, image, body, userId }) => {
    return postRepo.createPost({ title, image, body, userId });
  };

const editPost = async ({ title, image, body, postId }) => {
    return await postRepo.editPost({ title, image, body, postId });
};

  const postService = {
    getAllPost,
    createPost,
    editPost,
  };
  
  module.exports = postService;