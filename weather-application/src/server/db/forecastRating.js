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
    //   `INSERT INTO ${ForecastRating.TABLE_NAME} (
    //     ${ForecastRating.FORECAST_ID}, 
    //     ${ForecastRating.TEMP_MAX_ERROR}, 
    //     ${ForecastRating.TEMP_MIN_ERROR}, 
    //     ${ForecastRating.RATING_MAX}, 
    //     ${ForecastRating.RATING_MIN}) 
    // VALUES (
    //   ${params.forecast_id}, 
    //   ${params.temp_max_error}, 
    //   ${params.temp_min_error}, 
    //   ${params.rating_max}, 
    //   ${params.rating_min}) 
    // ON DUPLICATE KEY UPDATE 
    // ${ForecastRating.TEMP_MAX_ERROR}=${params.temp_max_error}, 
    // ${ForecastRating.TEMP_MIN_ERROR}=${params.temp_min_error}, 
    // ${ForecastRating.rating_max}=${params.rating_max}, 
    // ${ForecastRating.rating_min}=${params.rating_min}
    // `,
    pool.query(
    `INSERT INTO  ${ForecastRating.TABLE_NAME} (
      ${ForecastRating.FORECAST_ID}, 
      ${ForecastRating.TEMP_MAX_DELTA}, 
      ${ForecastRating.TEMP_MIN_DELTA}, 
      ${ForecastRating.RATING_MAX}, 
      ${ForecastRating.RATING_MIN}) 
      values (
      ${params.forecast_id}, 
      ${params.temp_max_delta}, 
      ${params.temp_min_delta}, 
      ${params.rating_max}, 
      ${params.rating_min}) 
      on duplicate key update 
      ${ForecastRating.TEMP_MAX_DELTA}=${params.temp_max_delta}, 
      ${ForecastRating.TEMP_MIN_DELTA}=${params.temp_min_delta}, 
      ${ForecastRating.RATING_MAX}=${params.rating_max}, 
      ${ForecastRating.RATING_MIN}=${params.rating_min}`,
      (err, result) => {
        if (err) {
          return reject(err);
        } else {
          console.log("New record has been added to the table;");
          return resolve(result);
        }
      }
    );
  });
};

export default { getForecastRatingRecords, insertForecastRatingRecord };
