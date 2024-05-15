const posts = require("../models/posts");

const addPosts = async (req, res) => {
  const { userId, userName, postTitle, postMsg, likes } = req.body;
  const newPost = {
    userId: userId,
    userName: userName,
    postTitle: postTitle,
    postMsg: postMsg,
    likes: likes,
  };
  try {
    if (newPost) {
      const addPost = await posts.insertMany([newPost]);
      const findPost = await posts.findById(addPost[0]._id);
      res.json(findPost);
    }
  } catch (error) {
    res.json(error);
  }
};

const allPosts = async (req, res) => {
  try {
    const findPosts = await posts.find();
    res.json(findPosts.reverse());
  } catch (error) {
    res.json(error);
  }
};

const myPost = async (req, res) => {
  const { id } = req.params;
  try {
    const findPost = await posts.find({ userId: id });
    res.json(findPost.reverse());
  } catch (error) {
    res.json(error);
  }
};

const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const findPost = await posts.findById(id);
    res.json(findPost);
  } catch (error) {
    res.json(error);
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const delPost = await posts.findByIdAndDelete(id);
    res.json(delPost);
  } catch (error) {
    res.json(error);
  }
};

const editPost = async (req, res) => {
  const { id } = req.params;
  const { getTitle, getMsg } = req.body;
  try {
    const updatePost = await posts.findByIdAndUpdate(id, {
      postTitle: getTitle,
      postMsg: getMsg,
    });
    const updatedPost = await posts.findById(id);
    res.json(updatedPost);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { addPosts, allPosts, myPost, deletePost, getPost, editPost };
