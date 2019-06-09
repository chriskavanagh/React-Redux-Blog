const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

//const Post = require("../../models/Post");
const { Post, validate } = require("../../models/Post");
// using exports.Post = Post; in models/Post.js
//const p = require("../../models/Post");
// p.Post.find().then(posts => res.json(posts));

router.get("/", (req, res) => {
  Post.find().then(posts => res.json(posts));
});

router.post("/", auth, (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newPost = new Post({
    title: req.body.title,
    body: req.body.body
  });
  newPost.save().then(post => res.json(post));
});

router.delete("/:id", auth, async (req, res) => {
  const post = await findById(req.params.id);

  if (!post) return res.status(404).send("The Post Was Not Found!");
  res.send(post);
});

module.exports = router;
