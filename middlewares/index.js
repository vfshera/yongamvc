const logger = require("./logger");

/***
 * Helmet
 */
const helmet = require("helmet");

/**
 * Middleware List
 */
// @ts-ignore
const middlewares = [helmet(), logger];

const attach = (app) => {
  app.use(middlewares);
  app.disable("x-powered-by");
};

module.exports = attach;
