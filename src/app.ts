import express from "express";
import dotenv from "dotenv";

import middlewares from "./middlewares";
import routes from "./routes";

import { create } from "express-handlebars";

const app = express();

dotenv.config();

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
 *MIDDLEWARES & ROUTES
 */
middlewares(app);

routes(app);

app.listen(5000, () => console.log(`Express at http://localhost:5000`));
