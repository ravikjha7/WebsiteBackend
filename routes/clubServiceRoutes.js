const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");
const clubServiceController = require("./../controllers/clubServiceController");

router.post(
  "/insertCS",
  authController.protect,
  authController.restrictTo("developer"),
  clubServiceController.insertCS
);
router.get("/getAllCS", clubServiceController.getAllCS);

module.exports = router;
