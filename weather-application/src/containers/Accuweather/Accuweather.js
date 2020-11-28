import React from "react";

import Model from "components/Model/Model";
import ModelService from "service/ModelService";
import { ModelsValues } from "common/databaseValues";

class Accuweather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
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
      .predictedTempRecords(ModelsValues.ACCUWEATHER)
      .then((predictedTempRecords) => {
        this.setState({ predictedTempRecords: predictedTempRecords }, () =>
          console.log("PREDICTED TEMP: ", this.state.predictedTempRecords)
        );
      });
  }

  getActualTempRecords() {
    new ModelService()
      .actualTempRecords(ModelsValues.ACCUWEATHER)
      .then((actualTempRecords) => {
        this.setState({ actualTempRecords: actualTempRecords }, () =>
          console.log("ACTUAL TEMP: ", this.state.actualTempRecords)
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
        this.insertModelsRatingRecords();
      }
    );
  }

  insertForecastRatingRecords() {
    const { forecastRatingRecords } = this.state;

    new ModelService().forecastRatingRecords(forecastRatingRecords);
  }

  insertModelsRatingRecords() {
    new ModelService().modelsRatingRecords();
  }

  render() {
    const { customers } = this.state;
    return (
      <div>
        This is a accuweather component
        <Model customers={customers} />
      </div>
    );
  }
}

export default Accuweather;
