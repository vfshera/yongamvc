const { products } = require("../data");

const allProducts = (req, res) => {
  res.render("products", { products });
};

module.exports = { allProducts };
