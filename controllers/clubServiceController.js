const ClubService = require("../models/clubServiceModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.insertCS = catchAsync(async (req, res, next) => {
  const clubService = new ClubService(req.body);
  if (
    !clubService.title ||
    !clubService.presenterName ||
    !clubService.issuedAt
  ) {
    return next(new AppError("Please provide all the fields", 400));
  }
  if (req.user.role === "user") {
    return next(new AppError("User Not Authorized for this function", 401));
  }
  clubService.save();
  res.status(201).json({
    status: "success",
    data: {
      clubService,
    },
  });
});

exports.getAllCS = catchAsync(async (req, res, next) => {
  const clubService = await ClubService.find();
  res.status(201).json({
    status: "success",
    data: {
      clubService,
    },
  });
});
