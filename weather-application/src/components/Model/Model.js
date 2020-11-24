import React from "react";

const Model = (props) => {
  const { customers } = props;

  return (
    <div>
      <ul className="user-list">
        {customers.map(
          ({
            model_id,
            model_name,
            forecast_date,
            forecast_type_id,
            type_description,
          }) => (
            <li key={(model_id, forecast_date, forecast_type_id)}>
              {model_id} {model_name} {forecast_date} {type_description}
            </li>
          )
        )}
      </ul>
      This is a model component
    </div>
  );
};

export default Model;
