import pool from "./connection.js";

const table = "models";

const allRecords = async (params) => {
  return new Promise((resolve, reject) => {
    // pool.query(
    //   `select models.model_id, models.model_name, ` +
    //     `forecast_type_id, forecast_type.type_description, DATE_FORMAT(predicted_temp.forecast_date, "%M %d %Y") as date ` +
    //     `from models, predicted_temp, forecast_type ` +
    //     `WHERE models.model_id = predicted_temp.model_id ` +
    //     `AND predicted_temp.forecast_type_id = forecast_type.type_id ` +
    //     `AND predicted_temp.model_id = 1 AND forecast_type_id = ${params.id}`,
    //   (err, result) => {
    //     if (err) {
    //       return reject(err);
    //     } else {
    //       return resolve(result);
    //     }
    //   }
    // );
  });
};

export default allRecords;
