const express = require("express");
const router = express.Router();

//const Post = require("../../models/Post");
const { Post, validate } = require("../../models/Post");

router.get("/", (req, res) => {
  Post.find().then(posts => res.json(posts));
});

router.post("/", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    body: req.body.body
  });
  newPost.save().then(post => res.json(post));
});

module.exports = router;
