import { Request, Response } from "express";

import apiRoutes from "./api";
import webRoutes from "./web";

const setRoutes = (app: any) => {
  app.use(webRoutes);
  app.use("/api", apiRoutes);

  app.all("*", (req: Request, res: Response) => {
    res.send(`
    <h1>Oops Seems You Lost Your Way</h1>
  
    <a href="/" >Go Back</a>
    `);
  });
};

export default setRoutes;
