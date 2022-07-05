const express = require("express");
import { ProductController, UserContoller } from "../controllers";

const router = express.Router();

router.get("/products", ProductController.allProducts);

router.get("/users", UserContoller.allUsers);

export default router;
