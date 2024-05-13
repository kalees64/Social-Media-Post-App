const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    postTitle: {
      type: String,
      required: true,
    },
    postMsg: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const posts = mongoose.model("posts", postSchema);

module.exports = posts;
