const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
require("dotenv").config();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

require("./loaders/routes")(app);

app.listen({ port: process.env.PORT || 8000 }, () => {
  console.log(`Listening On ${process.env.PORT}`);
});

module.exports = app;
