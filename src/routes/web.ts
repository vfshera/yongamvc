import express, { Request, Response } from "express";

import { ProductController, UserContoller } from "../controllers";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.render("index", { message: "Welcome To The Home Page" });
});

router.get("/products", ProductController.allProducts);

router.get("/users", UserContoller.allUsers);

export default router;
