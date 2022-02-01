const { users } = require("../data");

const allUsers = (req, res) => {
  res.render("users", { users });
};

module.exports = { allUsers };
