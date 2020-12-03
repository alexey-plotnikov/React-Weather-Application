import pool from "./connection.js";

import { ForecastRating } from "../../common/databaseValues.js";

const getForecastRatingRecords = async (params) => {
  return new Promise((resolve, reject) => {
    pool.query(``, (err, result) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }
    });
  });
};

const insertForecastRatingRecord = (params) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO  ${ForecastRating.TABLE_NAME} (
      ${ForecastRating.MODEL_ID}, 
      ${ForecastRating.FORECAST_DATE}, 
      ${ForecastRating.TEMP_MAX_DELTA}, 
      ${ForecastRating.TEMP_MIN_DELTA}, 
      ${ForecastRating.RATING_MAX}, 
      ${ForecastRating.RATING_MIN}, 
      ${ForecastRating.FORECAST_TYPE_ID}) 
      values (
      ${params.model_id}, 
      '${params.forecast_date}', 
      ${params.temp_max_delta}, 
      ${params.temp_min_delta}, 
      ${params.rating_max}, 
      ${params.rating_min}, 
      ${params.forecast_type_id}
      ) 
      on duplicate key update 
      ${ForecastRating.TEMP_MAX_DELTA}=${params.temp_max_delta}, 
      ${ForecastRating.TEMP_MIN_DELTA}=${params.temp_min_delta}, 
      ${ForecastRating.RATING_MAX}=${params.rating_max}, 
      ${ForecastRating.RATING_MIN}=${params.rating_min}`,
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

export default { getForecastRatingRecords, insertForecastRatingRecord };
