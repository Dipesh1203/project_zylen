const express = require("express");
const router = express.Router();
// const { authenticate } = require("../util/middleware");
const {
  register,
  login,
  getUser,
  updateProfile,
} = require("../controller/user");

// router.post("/register", register);

// router.post("/login", login);

// router.get("/profile/:id", getUser);

// router.put("/profile/:id", authenticate, updateProfile);

module.exports = router;
