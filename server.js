const express = require("express");
const app = express();
require("dotenv").config();

const { create } = require("express-handlebars");

/*
 *SET UP
 */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

const exphbs = create({
  partialsDir: __dirname + "/views/components",
  layoutsDir: __dirname + "/views/layouts",
  extname: ".hbs",
  defaultLayout: "app",
});

app.engine("hbs", exphbs.engine);
app.set("view engine", "hbs");
app.set("views", __dirname + "/views/pages");

/*
 *MIDDLEWARES
 */

require("./middlewares")(app);

/*
 *
 *ROUTES
 */
require("./routes")(app);

app.listen(5000, () => console.log(`Express at http://localhost:5000`));
