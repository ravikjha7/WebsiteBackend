const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");
const blogController = require("./../controllers/blogController");

router.post("/insertBlog", authController.protect , blogController.insertBlog);
router.get("/getAllBlogs", blogController.getAllBlogs);

module.exports = router;