import { Request, Response, NextFunction } from "express";

import logger from "./logger";
const middlewares = [logger];

const attach = (app: any) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log("Index Middlewares");
    next();
  });
};

export default attach;
