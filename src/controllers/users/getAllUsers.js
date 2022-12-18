const connection = require("../../../db");

module.exports = (req, res) => {
  const sqlQuery = "SELECT * from USERS;";
  connection
    .promise()
    .query(sqlQuery)
    .then(([result]) => res.send(result));
};
