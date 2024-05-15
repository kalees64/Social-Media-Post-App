const express = require("express");
const router = express.Router();

const post = require("../controllers/postControl");

router.post("/addpost", post.addPosts);
router.get("/allpost", post.allPosts);
router.get("/mypost/:id", post.myPost);
router.get("/mypost/editpost/:id", post.getPost);
router.delete("/mypost/:id", post.deletePost);
router.patch("/mypost/:id", post.editPost);

module.exports = router;
