export const PredictedTemp = {
    TABLE_NAME: "predicted_temp",
    FORECAST_ID: "predicted_temp.forecast_id",
    MODEL_ID: "predicted_temp.model_id",
    FORECAST_DATE: "predicted_temp.forecast_date",
    PREDICTED_TEMP_MAX: "predicted_temp.predicted_temp_max",
    PREDICTED_TEMP_MIN: "predicted_temp.predicted_temp_min",
    FORECAST_TYPE_ID: "predicted_temp.forecast_type_id"
}

export const ActualTemp = {
    TABLE_NAME: "actual_temp",
    FORECAST_ID: "actual_temp.forecast_id",
    ACTUAL_TEMP_MAX: "actual_temp.actual_temp_max",
    ACTUAL_TEMP_MIN: "actual_temp.actual_temp_min",
}

export const ForecastRating = {
    TABLE_NAME: "forecast_rating",
    FORECAST_ID: "forecast_rating.forecast_id",
    TEMP_MAX_DELTA: "forecast_rating.temp_max_delta",
    TEMP_MIN_DELTA: "forecast_rating.temp_min_delta",
    RATING_MAX: "forecast_rating.rating_max",
    RATING_MIN: "forecast_rating.rating_min",
}