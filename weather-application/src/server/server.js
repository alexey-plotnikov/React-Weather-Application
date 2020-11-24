import express from "express";
import mysql from "mysql";
import { mysql_connect } from "./config/config.js";
import apiRouter from "./routes.js";

const app = express();
const port = 8000;

app.use(express.static("public"));
app.use(apiRouter);

app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});
