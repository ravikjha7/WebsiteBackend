const Event = require("../models/eventModel");
const catchAsync = require("./../utils/catchAsync");

exports.insertEvent = catchAsync(async (req, res, next) => {
  const event = new Event(req.body);

  if (req.user.role === "user") {
    return next(new AppError("User Not Authorized for this function", 401));
  }
  event.save();
  res.status(201).json({
    status: "success",
    data: {
      event,
    },
  });
});

exports.getAllEvents = catchAsync(async (req, res, next) => {
  const event = await Event.find();
  res.status(201).json({
    status: "success",
    data: {
      event,
    },
  });
});
