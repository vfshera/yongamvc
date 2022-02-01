const apiRoutes = require("./api");
const webRoutes = require("./web");

const setRoutes = (app) => {
  app.use(webRoutes);
  app.use("/api", apiRoutes);

  app.all("*", (req, res) => {
    res.send(`
    <h1>Oops Seems You Lost Your Way</h1>
  
    <a href="/" >Go Back</a>
    `);
  });
};

module.exports = setRoutes;
