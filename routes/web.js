const express = require("express");
const { ProductController, UserContoller } = require("../controllers");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { message: "Welcome To The Home Page" });
});

router.get("/products", ProductController.allProducts);

router.get("/users", UserContoller.allUsers);

module.exports = router;
