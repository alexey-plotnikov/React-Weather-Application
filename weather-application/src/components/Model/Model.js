import React from "react";

const Model = (props) => {
  const { modelsRatingTable } = props;

  return (
    <div>
      <ul className="user-list">
        {modelsRatingTable.map(
          ({
            model_id,
            forecast_type_id,
            avg_max_temp_delta,
            avg_min_temp_delta,
            avg_max_temp_rating,
            avg_min_temp_rating
          }) => (
            <li key={(model_id, forecast_type_id)}>
              {avg_max_temp_delta} {avg_min_temp_delta} {avg_max_temp_rating} {avg_min_temp_rating}
            </li>
          )
        )}
      </ul>
      This is a model component
    </div>
  );
};

export default Model;
