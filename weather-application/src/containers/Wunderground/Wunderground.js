import React from "react";

import Model from "components/Model/Model";
import ModelService from "service/ModelService";
import { ModelsValues } from "common/databaseValues";

class Wunderground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predictedTempRecords: [],
      actualTempRecords: [],
      forecastRatingRecords: [],
    };
  }

  componentDidMount() {
    this.getPredictedTempRecords();
    this.getActualTempRecords();
  }

  componentDidUpdate(prevProps) {
    if (this.props.forecastType !== prevProps.forecastType) {
      this.tempDeltaCalculation();
    }
  }

  getPredictedTempRecords() {
    new ModelService()
      .predictedTempRecords(ModelsValues.WUNDERGROUND)
      .then((predictedTempRecords) => {
        this.setState({ predictedTempRecords: predictedTempRecords }, () =>
          console.log("WUNDER PREDICTED TEMP: ", this.state.predictedTempRecords)
        );
      });
  }

  getActualTempRecords() {
    new ModelService()
      .actualTempRecords(ModelsValues.WUNDERGROUND)
      .then((actualTempRecords) => {
        this.setState({ actualTempRecords: actualTempRecords }, () =>
          console.log("WUNDER ACTUAL TEMP: ", this.state.actualTempRecords)
        );
      });
  }

  tempDeltaCalculation() {
    const { predictedTempRecords, actualTempRecords } = this.state;

    let forecastErrorsArray = new ModelService().tempDeltaCalculation(
      predictedTempRecords,
      actualTempRecords
    );

    this.setState(
      {
        forecastRatingRecords: forecastErrorsArray,
      },
      () => {
        this.insertForecastRatingRecords();
      }
    );
  }

  insertForecastRatingRecords() {
    const { forecastRatingRecords } = this.state;

    new ModelService().forecastRatingRecords(forecastRatingRecords);
  }

  render() {
    const { customers } = this.state;
    return (
      <div>
        This is a Wunderground component
      </div>
    );
  }
}

export default Wunderground;
