const middlewares = [require("./logger")];

const attach = (app) => {
  app.use(middlewares);
};

module.exports = attach;
