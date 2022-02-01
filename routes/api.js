const express = require("express");
const { ProductController, UserContoller } = require("../controllers");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

router.get("/products", ProductController.allProducts);

router.get("/users", UserContoller.allUsers);

module.exports = router;
