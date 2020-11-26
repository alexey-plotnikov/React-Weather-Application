import pool from "./connection.js";

import { ForecastRating } from "../../common/databaseValues.js";

const getForecastRatingRecords = async (params) => {
  return new Promise((resolve, reject) => {
    pool.query(
      ``,
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

const insertForecastRatingRecord = async (params) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `insert into ${ForecastRating.TABLE_NAME}(
            ${ForecastRating.FORECAST_ID}, 
            ${ForecastRating.TEMP_MAX_ERROR}, 
            ${ForecastRating.TEMP_MIN_ERROR}
            ) values ${params.forecast_id}, ${params.temp_max_error}, ${paras.temp_min_error}`,
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
