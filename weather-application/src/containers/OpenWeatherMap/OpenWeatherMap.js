import React from "react";

import Model from "components/Model/Model";
import ModelService from "service/ModelService";
import { ModelsValues } from "common/databaseValues";

class OpenWeatherMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      predictedTempRecords: [],
      actualTempRecords: [],
      forecastRatingRecords: [],
      modelsRatingRecords: [],
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
      .getPredictedTempRecords(ModelsValues.OPENWEATHERMAP)
      .then((predictedTempRecords) => {
        this.setState({ predictedTempRecords: predictedTempRecords }, () =>
          console.log("OPENWEATHERMAP PREDICTED TEMP: ", this.state.predictedTempRecords)
        );
      });
  }

  getActualTempRecords() {
    new ModelService()
      .getActualTempRecords(ModelsValues.OPENWEATHERMAP)
      .then((actualTempRecords) => {
        this.setState({ actualTempRecords: actualTempRecords }, () =>
          console.log("OPENWEATHERMAP ACTUAL TEMP: ", this.state.actualTempRecords)
        );
      });
  }

  tempDeltaCalculation() {
    const { predictedTempRecords, actualTempRecords } = this.state;

    let forecastErrorsArray = new ModelService().calculateTempDelta(
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
        this.getModelsRatingRecords();
      }
    );
  }

  insertForecastRatingRecords() {
    const { forecastRatingRecords } = this.state;

    new ModelService().insertForecastRatingRecords(forecastRatingRecords);
  }

  insertModelsRatingRecords() {
    new ModelService().insertModelsRatingRecords();
  }

  getModelsRatingRecords() {
    new ModelService()
      .getModelsRatingRecords(ModelsValues.OPENWEATHERMAP)
      .then((modelsRatingRecords) => {
        this.setState({ modelsRatingRecords: modelsRatingRecords }, () =>
          console.log("OPENWEATHERMAP modelsRatingRecords: ", this.state.modelsRatingRecords)
        );
      });
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

export default OpenWeatherMap;
