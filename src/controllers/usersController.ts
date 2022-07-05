import express, { Request, Response } from "express";
import { users } from "../data";

const allUsers = (req: Request, res: Response) => {
  res.render("users", { users });
};

export default { allUsers };
