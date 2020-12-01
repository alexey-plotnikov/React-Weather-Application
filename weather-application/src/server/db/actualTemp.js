import pool from "./connection.js";

import {
  Models,
  PredictedTemp,
  ActualTemp,
} from "../../common/databaseValues.js";

const actualTempRecords = async (params) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select ${PredictedTemp.MODEL_ID}, 
        ${ActualTemp.FORECAST_ID}, 
        ${Models.MODEL_NAME}, 
        DATE_FORMAT(${PredictedTemp.FORECAST_DATE}, "%M %d %Y") AS Date, 
        ${ActualTemp.ACTUAL_TEMP_MAX}, 
        ${ActualTemp.ACTUAL_TEMP_MIN}, 
        ${PredictedTemp.FORECAST_TYPE_ID} 
        FROM ${ActualTemp.TABLE_NAME}, 
        ${PredictedTemp.TABLE_NAME}, 
        ${Models.TABLE_NAME}
        WHERE 
        ${PredictedTemp.FORECAST_ID} = ${ActualTemp.FORECAST_ID} AND 
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

export default actualTempRecords;
