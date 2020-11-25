import express from "express";

import allRecords from "./db/models.js";
import predictedTempRecords from './db/predictedTemp.js'
import actualTempRecords from "./db/actualTemp.js";

const router = express.Router();

router.get("/api/models/:id", async (req, res) => {
  let response = await allRecords(req.params);
  res.send(response);
});

router.get("/api/predictedTemp/", async (req, res) => {
  let response = await predictedTempRecords();
  res.send(response);
});

router.get("/api/actualTemp/", async (req, res) => {
  let response = await actualTempRecords();
  res.send(response);
});

export default router;
