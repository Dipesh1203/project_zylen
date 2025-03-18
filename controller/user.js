const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const db = require("../db/db");

const JWT_SECRET = process.env.JWT_SECRET;

const register = {};

const login = {};
const getUser = {};

const updateProfile = async () => {};

module.exports = { register, login, getUser, updateProfile };
