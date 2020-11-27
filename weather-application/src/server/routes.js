import express from "express";
import bodyParser from "body-parser";

import pool from "./db/connection.js";

import allRecords from "./db/models.js";
import predictedTempRecords from "./db/predictedTemp.js";
import actualTempRecords from "./db/actualTemp.js";
import forecastRating from "./db/forecastRating.js";

var app = express();

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router();

// router.get("/api/models/:id", async (req, res) => {
//   let response = await allRecords(req.params);
//   res.send(response);
// });

router.get("/api/predictedTemp/", async (req, res) => {
  let response = await predictedTempRecords();
  res.send(response);
});

router.get("/api/actualTemp/", async (req, res) => {
  let response = await actualTempRecords();
  res.send(response);
});

router.put("/api/forecastRating/", jsonParser, async (req, res) => {
  let response = await forecastRating.insertForecastRatingRecord(req.body);
  res.send(response);
});

export default router;
