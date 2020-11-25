import pool from "./connection.js";

import { PredictedTemp } from "../../common/databaseValues.js";
import { ActualTemp } from "../../common/databaseValues.js";

const actualTempRecords = async (params) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select ${PredictedTemp.MODEL_ID}, 
        ${ActualTemp.FORECAST_ID}, 
        DATE_FORMAT(${PredictedTemp.FORECAST_DATE}, "%M %d %Y") AS date, 
        ${ActualTemp.ACTUAL_TEMP_MAX}, 
        ${ActualTemp.ACTUAL_TEMP_MIN}, 
        ${PredictedTemp.FORECAST_TYPE_ID} from ${ActualTemp.TABLE_NAME}, ${PredictedTemp.TABLE_NAME}
        WHERE ${PredictedTemp.FORECAST_ID} = ${ActualTemp.FORECAST_ID}`,
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
