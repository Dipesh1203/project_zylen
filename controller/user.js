const bcrypt = require("bcrypt");
const User = require("../models/user.model");

const createUser = async (req, res) => {
  try {
    const { name, email, age, password } = req.body;

    if (!name || !email || !age || !password) {
      return res.status(400).json({
        data: {},
        message: "Some required fields are Missing",
        status: 400,
        error: {},
      });
    }

    if (age < 0) {
      return res.status(400).json({
        data: {},
        message: "Age cannot be negative",
        status: 400,
        error: {},
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, age, password: hashedPassword });
    await user.save();

    return res.status(201).json({
      data: { user },
      message: "User Created Successfully",
      status: 201,
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      message: "Internal Server Error",
      status: 500,
      error: { error },
    });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ data: {}, message: "User not found", status: 404, error: {} });
    }
    res
      .status(200)
      .json({ data: { user }, message: "User found", status: 200, error: {} });
  } catch (error) {
    res.status(500).json({
      data: {},
      message: "Internal Server Error",
      status: 500,
      error: { error },
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      data: { users },
      message: "Users retrieved successfully",
      status: 200,
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      message: "Internal Server Error",
      status: 500,
      error: { error },
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const update = {
      ...(name && { name }),
      ...(age && { age }),
      ...(email && { email }),
    };

    const updatedUser = await User.findByIdAndUpdate(id, update, { new: true });

    if (!updatedUser) {
      return res
        .status(404)
        .json({ data: {}, message: "User not found", status: 404, error: {} });
    }
    res.status(200).json({
      data: { updatedUser },
      message: "User updated successfully",
      status: 200,
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      message: "Internal Server Error",
      status: 500,
      error: { error },
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res
        .status(404)
        .json({ data: {}, message: "User not found", status: 404, error: {} });
    }
    res.status(200).json({
      data: {},
      message: "User deleted successfully",
      status: 200,
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      message: "Internal Server Error",
      status: 500,
      error: { error },
    });
  }
};

module.exports = { createUser, getUser, getAllUser, updateUser, deleteUser };
