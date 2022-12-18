const { getAllUsers } = require("../controllers/users");

const Router = require("express").Router();

Router.get("/", getAllUsers);

module.exports = Router;
