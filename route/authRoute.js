const express = require("express");
const authController = require("../controller/authController");
const router = express.Router();

// Signup User
router.post("/signup", authController.signupUser);

// Login User
router.post("/login", authController.loginUser);

module.exports = router;