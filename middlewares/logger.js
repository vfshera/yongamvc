const {
  app: { logging },
} = require("../config");

const logger = (req, res, next) => {
  if (logging != "" && logging.toUpperCase() === "TRUE") {
    const time = new Date();
    console.log(
      req.method,
      req.url,
      `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    );
  }

  next();
};

module.exports = logger;
