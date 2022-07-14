const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  brief: {
    type: String,
    required: [true, "Please give brief about event!"],
  },
  detail: {
    type: String,
    required: [true, "Please give detail about event!"],
  },
  photo: String,

  conductedBy: {
    type: [String],
    required: true,
  },
  conductedOn: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
