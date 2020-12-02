export const Models = {
  TABLE_NAME: "models",
  MODEL_ID: "models.model_id",
  MODEL_NAME: "models.model_name",
};

export const ForecastType = {
  TABLE_NAME: "forecast_type",
  FORECAST_TYPE_ID: "forecast_type.type_id",
  FORECAST_TYPE_DESCRIPTION: "forecast_type.type_description"
}

export const PredictedTemp = {
  TABLE_NAME: "predicted_temp",
  FORECAST_ID: "predicted_temp.forecast_id",
  MODEL_ID: "predicted_temp.model_id",
  FORECAST_DATE: "predicted_temp.forecast_date",
  PREDICTED_TEMP_MAX: "predicted_temp.predicted_temp_max",
  PREDICTED_TEMP_MIN: "predicted_temp.predicted_temp_min",
  FORECAST_TYPE_ID: "predicted_temp.forecast_type_id",
};

export const ActualTemp = {
  TABLE_NAME: "actual_temp",
  FORECAST_ID: "actual_temp.forecast_id",
  ACTUAL_TEMP_MAX: "actual_temp.actual_temp_max",
  ACTUAL_TEMP_MIN: "actual_temp.actual_temp_min",
};

export const ForecastRating = {
  TABLE_NAME: "forecast_rating",
  FORECAST_ID: "forecast_rating.forecast_id",
  TEMP_MAX_DELTA: "forecast_rating.temp_max_delta",
  TEMP_MIN_DELTA: "forecast_rating.temp_min_delta",
  RATING_MAX: "forecast_rating.rating_max",
  RATING_MIN: "forecast_rating.rating_min",
};

export const ModelsRating = {
  TABLE_NAME: "models_rating",
  MODEL_ID: "models_rating.model_id",
  FORECAST_TYPE_ID: "models_rating.forecast_type_id",
  AVG_MAX_TEMP_DELTA: "models_rating.avg_max_temp_delta",
  AVG_MIN_TEMP_DELTA: "models_rating.avg_min_temp_delta",
  AVG_MAX_TEMP_RATING: "models_rating.avg_max_temp_rating",
  AVG_MIN_TEMP_RATING: "models_rating.avg_min_temp_rating"
}

export const ModelsValues = {
  ACCUWEATHER: 1,
  WUNDERGROUND: 2,
  METEOUA: 3,
  OPENWEATHERMAP: 4,
  YRNO: 5,
  YANDEXPOGODA: 6
};
