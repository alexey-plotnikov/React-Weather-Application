import express from "express";
import bodyParser from "body-parser";

import pool from "./db/connection.js";

import allRecords from "./db/models.js";
import predictedTempRecords from "./db/predictedTemp.js";
import actualTempRecords from "./db/actualTemp.js";
import insertForecastRatingRecord from "./db/forecastRating.js";

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
  pool.query(
    `INSERT INTO forecast_rating (forecast_id, temp_max_error) 
    VALUES (${req.body.forecast_id}, ${req.body.temp_max_error}) ON DUPLICATE KEY UPDATE temp_max_error=${req.body.temp_max_error}`,
    function (err, data) {
      if (err) return console.log(err);
      res.redirect("/");
    }
  );
  // console.log(req.body);
  // let response = await insertForecastRatingRecord();
  // res.send(response);
});

export default router;
