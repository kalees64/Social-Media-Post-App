const express = require("express");
const router = express.Router();

const post = require("../controllers/postControl");

router.post("/addpost", post.addPosts);
router.get("/allpost", post.allPosts);
router.get("/mypost/:id", post.myPost);
router.delete("/mypost/:id", post.deletePost);

module.exports = router;
