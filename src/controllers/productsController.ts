import express, { Request, Response } from "express";

import { products } from "../data";

const allProducts = (req: Request, res: Response) => {
  res.render("products", { products });
};

export default { allProducts };
