const Router = require("express").Router();

// require the controller
const { getAllUsers } = require("../controllers/users");

// hide this part :
// Router.get("/", (req, res) => {
//   res.send("Test users Routes");
// });

// use the controller with the route
Router.get("/", getAllUsers);

module.exports = Router;
