const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  username: {
    type: String,
    required: [true, "Please tell us your username!"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: String,
  role: {
    type: String,
    enum: ["developer", "user", "editor"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  board: {
    type: String,
  },
  contact: {
    type: String,
    required: [true, "Please Provide your Contact Number"],
  },
  quote: {
    type: String,
    required: [true],
  },
  linkedin: {
    type: String,
    required: [true],
  },
  instagram: {
    type: String,
    // required: [true],
  },
  areaOfInterest: {
    type: String,
    required: [true],
  },
});

userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
