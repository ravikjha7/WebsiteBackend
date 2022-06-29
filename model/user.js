const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    minlength: 8,
    required: true
  },
  role: {
    type: String,
    default: "Member"
  },
  email : {
    type: String,
    required: true
  },
  contact : {
    type: Number,
    required: true
  },
  board : {
      type: String,
      required: true
  },
   quote : {
      type: String,
      required: true
  }
})

const User = Mongoose.model("User", UserSchema);

module.exports = User;