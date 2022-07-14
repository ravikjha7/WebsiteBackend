const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
  },
  content: {
    type: String,
    required: [true, "Please add some content"],
  },
  // photo: {
  //     type: String,
  //     required: [true, "Please add a photo"],
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: [String],
    required: [true, "Please add a name"],
  },
  githubofAuthor: {
    type: String,
    required: [true, "Please add a github link"],
  },
  redirectLink: {
    type: String,
    required: [true],
  },
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
