const express = require("express");
const connection = require("../db");
const { usersRoute } = require("./routes");

connection
  .promise()
  .query("use blog;")
  .catch((e) => console.error(e));

const app = express();
app.use(express.json());

app.use("/api/users", usersRoute);

module.exports = app;
