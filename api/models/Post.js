const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");

// Create Schema
const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 255
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

function validatePost(post) {
  const schema = {
    title: Joi.string()
      .min(5)
      .max(50)
      .required(),
    body: Joi.string()
      .min(3)
      .max(150)
      .required()
  };

  return Joi.validate(post, schema);
}

const Post = mongoose.model("post", PostSchema);
//module.exports = Post;
//exports.Post = Post;
//exports.validate = validatePost;

module.exports = {
  Post: Post,
  validate: validatePost
};
