const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const blogCOntrolerr = require("./../controllers/blogControleer");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(blogCOntrolerr.getAllBlogs)
  .post(authController.protect, blogCOntrolerr.insertBlog);

// router.route("/:id/upload", upload.single("file"), blogCOntrolerr.uploadBlog);
router
  .route("/:id/upload")
  .post(upload.single("file"), blogCOntrolerr.uploadBlog);
  
module.exports = router;
