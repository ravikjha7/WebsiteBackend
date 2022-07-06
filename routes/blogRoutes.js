const express = require("express");
const blogCOntrolerr = require("./../controllers/blogControleer");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(blogCOntrolerr.getAllBlogs)
  .post(authController.restrictTo(["editor"]), blogCOntrolerr.insertBlog);

module.exports = router;
