const express = require("express");
const errorCOntrolerr = require("./../controllers/errorCotroller");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(errorCOntrolerr)
  .post(authController.restrictTo(["developer"]));

module.exports = router;
