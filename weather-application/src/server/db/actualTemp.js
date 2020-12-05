import pool from "./connection.js";

import {
  Models,
  PredictedTemp,
  ActualTemp,
  ForecastType
} from "../../common/databaseValues.js";

// DATE_FORMAT(${ActualTemp.FORECAST_DATE}, "%M %d %Y") AS forecast_date, 

const actualTempRecords = async (params) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select ${ActualTemp.MODEL_ID},
        ${Models.MODEL_NAME}, 
        ${ActualTemp.FORECAST_DATE}, 
        ${ActualTemp.ACTUAL_TEMP_MAX}, 
        ${ActualTemp.ACTUAL_TEMP_MIN}, 
        ${ActualTemp.FORECAST_TYPE_ID}, 
        ${ForecastType.FORECAST_TYPE_DESCRIPTION}
        FROM 
        ${ActualTemp.TABLE_NAME}, 
        ${PredictedTemp.TABLE_NAME}, 
        ${Models.TABLE_NAME},
        ${ForecastType.TABLE_NAME}
        WHERE 
        ${PredictedTemp.MODEL_ID} = ${ActualTemp.MODEL_ID} AND 
        ${PredictedTemp.FORECAST_DATE} = ${ActualTemp.FORECAST_DATE} AND
        ${PredictedTemp.FORECAST_TYPE_ID} = ${ActualTemp.FORECAST_TYPE_ID} AND
        ${Models.MODEL_ID} = ${PredictedTemp.MODEL_ID} AND 
        ${ForecastType.FORECAST_TYPE_ID} = ${ActualTemp.FORECAST_TYPE_ID}`,
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
