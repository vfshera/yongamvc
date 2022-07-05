import { Request, Response, NextFunction, Express } from "express";
import helmet from "helmet";
import logger from "./logger";
const middlewares = [helmet(), logger];

const attach = (app: Express) => {
  app.use(middlewares);
};

export default attach;
