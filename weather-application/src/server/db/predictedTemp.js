import pool from "./connection.js";

import { Models, PredictedTemp } from "../../common/databaseValues.js";

const predictedTempRecords = async (params) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select ${PredictedTemp.MODEL_ID}, 
        ${Models.MODEL_NAME}, 
        ${PredictedTemp.FORECAST_DATE}, 
        ${PredictedTemp.PREDICTED_TEMP_MAX}, 
        ${PredictedTemp.PREDICTED_TEMP_MIN}, 
        ${PredictedTemp.FORECAST_TYPE_ID} 
        from 
        ${PredictedTemp.TABLE_NAME}, 
        ${Models.TABLE_NAME}
        WHERE 
        ${Models.MODEL_ID} = ${PredictedTemp.MODEL_ID}`,
      (err, result) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(result);
        }
      }
    );
  });
};

export default predictedTempRecords;
