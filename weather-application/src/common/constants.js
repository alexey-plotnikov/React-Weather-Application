import { PredictedTemp } from "./databaseValues";

export const MenuConstants = {
  TABLES_VIEW: "ALL TABLES",
  MODELS_RATING_VIEW: "MODELS RATING",
  ACTIVE_BUTTON: "active-button",
};

export const ModelConstants = {
  FORECAST_TYPE_DESCRIPTION: "Forecast type",
  AVG_TEMP_MAX_DELTA: "Аverage maximum temperature difference",
  AVG_TEMP_MIN_DELTA: "Аverage minimum temperature difference",
  AVG_MAX_TEMP_RATING: "Average maximum temperature rating",
  AVG_MIN_TEMP_RATING: "Average minimum temperature rating",
};

export const PredictedTempTableConstants = {
  TABLE_NAME: "Predicted Temperature",
  MODEL_NAME: "Model Name",
  FORECAST_DATE: "Forecast Date",
  PREDICTED_TEMP_MAX: "Maximum Forecast Temperature",
  PREDICTED_TEMP_MIN: "Minimum Forecast Temperature",
  FORECAST_TYPE: "Forecast type",
};

export const ActualTempTableConstants = {
  TABLE_NAME: "Actual Temperature",
  MODEL_NAME: "Model Name",
  FORECAST_DATE: "Forecast Date",
  ACTUAL_TEMP_MAX: "Actual Maximum Temperature",
  ACTUAL_TEMP_MIN: "Actual Minimum Temperature",
  FORECAST_TYPE: "Forecast type",
};

export const ForecastRatingTableConstants = {
  TABLE_NAME: "Forecast Rating",
  MODEL_NAME: "Model Name",
  FORECAST_DATE: "Forecast Date",
  TEMP_MAX_DELTA: "Maximum Temperature Difference",
  TEMP_MIN_DELTA: "Minimum Temperature Difference",
  RATING_MAX: "Maximum Temperature Rating",
  RATING_MIN: "Minimum Temperature Rating",
  FORECAST_TYPE: "Forecast type",
};
