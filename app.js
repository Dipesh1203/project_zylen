const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const dbUrl = process.env.ATLASDB_URL;
async function main() {
  await mongoose.connect(dbUrl);
}

main()
  .then(() => {
    console.log("Connection established");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

app.get("/", (req, res) => {
  console.log("=================");
  res.status(200).json({
    data: { message: "Root path is working successfully!" },
    status: 200,
    error: {},
  });
});

require("./loaders/routes")(app);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening On ${process.env.PORT}`);
});

module.exports = app;
