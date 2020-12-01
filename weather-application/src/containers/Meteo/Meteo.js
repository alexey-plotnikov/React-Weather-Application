import React from "react";

import Model from "components/Model/Model";
import ModelService from "service/ModelService";
import { ModelsValues } from "common/databaseValues";

class Meteo extends React.Component {
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
      .getPredictedTempRecords(ModelsValues.METEOUA)
      .then((predictedTempRecords) => {
        this.setState({ predictedTempRecords: predictedTempRecords }, () =>
          console.log("METEO PREDICTED TEMP: ", this.state.predictedTempRecords)
        );
      });
  }

  getActualTempRecords() {
    new ModelService()
      .getActualTempRecords(ModelsValues.METEOUA)
      .then((actualTempRecords) => {
        this.setState({ actualTempRecords: actualTempRecords }, () =>
          console.log("METEO ACTUAL TEMP: ", this.state.actualTempRecords)
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
      }
    );
  }

  insertForecastRatingRecords = () => {
    const { forecastRatingRecords } = this.state;

    new ModelService().insertForecastRatingRecords(forecastRatingRecords);

    this.insertModelsRatingRecords();
  };

  insertModelsRatingRecords = () => {
    new ModelService().insertModelsRatingRecords();

    this.getModelsRatingRecords();
  };

  getModelsRatingRecords = () => {
    new ModelService()
      .getModelsRatingRecords(ModelsValues.METEOUA)
      .then((modelsRatingRecords) =>
        new ModelService().getModelsRatingRecords(ModelsValues.METEOUA)
      )
      .then((modelsRatingRecords) => {
        this.setState({ modelsRatingRecords: modelsRatingRecords }, () =>
          console.log(
            "METEO modelsRatingRecords: ",
            this.state.modelsRatingRecords
          )
        );
      });
  };

  render() {
    const { modelsRatingRecords } = this.state;
    return (
      <div>
        This is a Meteo component
        <Model modelsRatingRecords={modelsRatingRecords} />
      </div>
    );
  }
}

export default Meteo;
