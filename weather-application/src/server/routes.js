import express from "express";

import allRecords from "./db/models.js";

const router = express.Router();

router.get("/api/models/:id", async (req, res) => {
  let test = await allRecords(req.params);
  res.send(test);
});

export default router;
