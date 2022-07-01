const express = require("express");

const authController = require("./../controllers/authController");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Hello World");
})
router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.patch(
  "/updateMyPassword",
  authController.protect,
  authController.updatePassword
);

router.get("/me", authController.protect, authController.getUser);

module.exports = router;
