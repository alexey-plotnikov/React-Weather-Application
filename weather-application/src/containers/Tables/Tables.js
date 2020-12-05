import React from "react";

import PredictedTempTable from "components/PredictedTempTable/PredictedTempTable";
import ActualTempTable from "components/ActualTempTable/ActualTempTable";
import ForecastRatingTable from "components/ForecastRatingTable/ForecastRatingTable"

class Tables extends React.Component {
  render() {
    const {
      predictedTempTable,
      actualTempTable,
      forecastRatingTable,
      modelsRatingTable,
    } = this.props;
    return (
      <div>
        <PredictedTempTable predictedTempTable={predictedTempTable} />
        <ActualTempTable actualTempTable={actualTempTable} />
        <ForecastRatingTable forecastRatingTable={forecastRatingTable} />
      </div>
    );
  }
}

export default Tables;
