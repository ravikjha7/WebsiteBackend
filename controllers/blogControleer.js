const Blog = require("../models/blogModel");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.insertBlog = catchAsync(async (req, res, next) => {
  const blog = new Blog(req.body);
  if (
    !blog.title ||
    !blog.content ||
    !blog.createdAt ||
    !blog.createdBy ||
    !blog.githubofAuthor ||
    !blog.redirectLink
  ) {
    return next(new AppError("Please provide all the fields", 400));
  }
  if (req.user.role === "user") {
    return next(new AppError("User Not Authorized for this function", 401));
  }
  blog.save();
  res.status(201).json({
    status: "success",
    data: {
      blog,
    },
  });
});

exports.getAllBlogs = catchAsync(async (req, res, next) => {
  const blog = await Blog.find();
  res.status(201).json({
    status: "success",
    data: {
      blog,
    },
  });
});

exports.uploadBlog = catchAsync(async (req, res, next) => {
  console.log(req.file);
});


// http://localhost:3000/api/v1/blogs/62cfcd969c828fea45257607/upload