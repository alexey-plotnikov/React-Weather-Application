import pool from "./connection.js";
import {
  Models,
  ForecastType,
  PredictedTemp,
  ForecastRating,
  ModelsRating,
} from "../../common/databaseValues.js";

const getModelsRating = async (params) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select 
      ${ModelsRating.MODEL_ID}, 
      ${ModelsRating.FORECAST_TYPE_ID}, 
      ${Models.MODEL_NAME}, 
      ${ForecastType.FORECAST_TYPE_DESCRIPTION}, 
      ${ModelsRating.AVG_MAX_TEMP_DELTA}, 
      ${ModelsRating.AVG_MIN_TEMP_DELTA}, 
      ${ModelsRating.AVG_MAX_TEMP_RATING}, 
      ${ModelsRating.AVG_MIN_TEMP_RATING}
      from 
      ${ModelsRating.TABLE_NAME}, 
      ${Models.TABLE_NAME}, 
      ${ForecastType.TABLE_NAME} 
      where 
      ${ModelsRating.MODEL_ID} = ${Models.MODEL_ID} AND 
      ${ModelsRating.FORECAST_TYPE_ID} = ${ForecastType.FORECAST_TYPE_ID}`,
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
      where 
      ${PredictedTemp.MODEL_ID} = ${ForecastRating.MODEL_ID} AND  
      ${PredictedTemp.FORECAST_DATE} = ${ForecastRating.FORECAST_DATE} AND 
      ${PredictedTemp.FORECAST_TYPE_ID} = ${ForecastRating.FORECAST_TYPE_ID} group by model_id, forecast_type_id) as result
      on duplicate key update 
      avg_max_temp_delta = result.avg_max_temp_delta, 
      avg_min_temp_delta = result.avg_min_temp_delta, 
      avg_max_temp_rating = result.avg_max_temp_rating, 
      avg_min_temp_rating = result.avg_min_temp_rating`,
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

export default { getModelsRating, insertModelsRating };
