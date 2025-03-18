const express = require("express");
const router = express.Router();
// const { authenticate } = require("../util/middleware");
const {
  createUser,
  getUser,
  deleteUser,
  getAllUser,
  updateUser,
} = require("../controller/user");

router.post("/create", createUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
router.get("/all", getAllUser);
router.get("/:id", getUser);

module.exports = router;
