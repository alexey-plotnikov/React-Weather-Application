import express from "express";
import bodyParser from "body-parser";

import pool from "./db/connection.js";

import modelsRating from "./db/models.js";
import predictedTempRecords from "./db/predictedTemp.js";
import actualTempRecords from "./db/actualTemp.js";
import forecastRating from "./db/forecastRating.js";

// create application/json parser
const jsonParser = bodyParser.json();

const router = express.Router();
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/api/predictedTemp/:modelId", async (req, res) => {
  let response = await predictedTempRecords(req.params);
  res.send(response);
});

router.get("/api/actualTemp/:modelId", async (req, res) => {
  let response = await actualTempRecords(req.params);
  res.send(response);
});

router.put("/api/forecastRating/", jsonParser, async (req, res) => {
  let response = await forecastRating.insertForecastRatingRecord(req.body);
  res.send(response);
});

router.put("/api/modelsRating/", jsonParser, async (req, res) => {
  // console.log('models rating: ', req.body)
  let response = await modelsRating(req.body);
  res.send(response);
});

export default router;
