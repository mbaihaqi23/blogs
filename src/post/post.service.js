const postRepo = require("./post.repo");

const getAllPost = async () => {
  return await postRepo.getAllPost();
}

const createPost = async ({ title, image, body, userId }) => {
    return postRepo.createPost({ title, image, body, userId });
  };

  const postService = {
    getAllPost,
    createPost,
    //editPost,
  };
  
  module.exports = postService;