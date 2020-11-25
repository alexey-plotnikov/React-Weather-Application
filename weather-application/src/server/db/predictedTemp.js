import pool from "./connection.js";

import { PredictedTemp } from "../../common/databaseValues.js";

const predictedTempRecords = async (params) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select ${PredictedTemp.MODEL_ID}, 
        ${PredictedTemp.FORECAST_ID}, 
        DATE_FORMAT(${PredictedTemp.FORECAST_DATE}, "%M %d %Y") AS date, 
        ${PredictedTemp.PREDICTED_TEMP_MAX}, 
        ${PredictedTemp.PREDICTED_TEMP_MIN}, 
        ${PredictedTemp.FORECAST_TYPE_ID} from ${PredictedTemp.TABLE_NAME}`,
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
