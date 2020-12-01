import pool from "./connection.js";
import {
  PredictedTemp,
  ForecastRating,
  ModelsRating,
} from "../../common/databaseValues.js";

const getModelsRating = async (params) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select * from models_rating`,
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

const insertModelsRating = async (params) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `insert into ${ModelsRating.TABLE_NAME} 
      (
        model_id, 
        forecast_type_id, 
        ${ModelsRating.AVG_MAX_TEMP_DELTA}, 
        ${ModelsRating.AVG_MIN_TEMP_DELTA}, 
        ${ModelsRating.AVG_MAX_TEMP_RATING},
        ${ModelsRating.AVG_MIN_TEMP_RATING}) 
      select result.model_id, 
      result.forecast_type_id, 
      result.avg_max_temp_delta, 
      result.avg_min_temp_delta, 
      result.avg_max_temp_rating, 
      result.avg_min_temp_rating
      from (select 
        ${PredictedTemp.MODEL_ID}, 
        ${PredictedTemp.FORECAST_TYPE_ID}, 
        avg(${ForecastRating.TEMP_MAX_DELTA}) as avg_max_temp_delta, 
        avg(${ForecastRating.TEMP_MIN_DELTA}) as avg_min_temp_delta, 
        avg(${ForecastRating.RATING_MAX}) as avg_max_temp_rating, 
        avg(${ForecastRating.RATING_MIN}) as avg_min_temp_rating 
        from ${PredictedTemp.TABLE_NAME}, ${ForecastRating.TABLE_NAME} 
      where ${PredictedTemp.FORECAST_ID} = ${ForecastRating.FORECAST_ID} group by model_id, forecast_type_id) as result
      on duplicate key update 
      avg_max_temp_delta = result.avg_max_temp_delta, 
      avg_min_temp_delta = result.avg_min_temp_delta, 
      avg_max_temp_rating = result.avg_max_temp_rating, 
      avg_min_temp_rating = result.avg_min_temp_rating`,
      (err, result) => {
        if (err) {
          return reject(err);
        } else {
          console.log("NEW RECORD TO TABLE MODELS RATING HAS BEEN ADDED");
          return resolve(result);
        }
      }
    );
  });
};

export default { getModelsRating, insertModelsRating };
