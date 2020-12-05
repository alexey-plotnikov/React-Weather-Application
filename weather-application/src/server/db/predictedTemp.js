import pool from "./connection.js";

import { Models, PredictedTemp, ForecastType} from "../../common/databaseValues.js";

const predictedTempRecords = async (params) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select ${PredictedTemp.MODEL_ID}, 
        ${Models.MODEL_NAME}, 
        ${PredictedTemp.FORECAST_DATE}, 
        ${PredictedTemp.PREDICTED_TEMP_MAX}, 
        ${PredictedTemp.PREDICTED_TEMP_MIN}, 
        ${PredictedTemp.FORECAST_TYPE_ID}, 
        ${ForecastType.FORECAST_TYPE_DESCRIPTION}
        from 
        ${PredictedTemp.TABLE_NAME}, 
        ${Models.TABLE_NAME},
        ${ForecastType.TABLE_NAME}
        WHERE 
        ${Models.MODEL_ID} = ${PredictedTemp.MODEL_ID} AND
        ${ForecastType.FORECAST_TYPE_ID} = ${PredictedTemp.FORECAST_TYPE_ID}`,
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
