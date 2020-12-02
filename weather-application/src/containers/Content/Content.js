import React from "react";

import Accuweather from "containers/Accuweather/Accuweather";
import Wunderground from "containers/Wunderground/Wunderground";
import Meteo from "containers/Meteo/Meteo";
import OpenWeatherMap from "containers/OpenWeatherMap/OpenWeatherMap";
import Yrno from "containers/Yr.no/YrNo";

import Menu from "components/Menu/Menu";
import YandexPogoda from "containers/Yandex.Pogoda/YandexPogoda";

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      predictedTempTable: [],
      actualTempTable: [],
      forecastRatingTable: [],
      modelsRatingTable: [],
      currentForecastType: null,
    };
  }

  componentDidMount() {
    this.selectPredictedTempTable();
    this.selectActualTempTable();
  }

  selectPredictedTempTable() {
    fetch("/api/predictedTemp/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonData) => {
        this.setState({
          predictedTempTable: jsonData,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  selectActualTempTable() {
    fetch("/api/actualTemp/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonData) => {
        this.setState(
          {
            actualTempTable: jsonData,
          },
          async () => {
            this.sortForecastRating();
            this.insertModelsRatingRecords();
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  sortForecastRating() {
    const { predictedTempTable, actualTempTable } = this.state;

    let forecastRatingArray = [];

    predictedTempTable.forEach((predictedTempRecord) => {
      actualTempTable.some((actualTempRecord) => {
        if (actualTempRecord.forecast_id === predictedTempRecord.forecast_id) {
          let tempMaxDelta = Math.abs(
            actualTempRecord.actual_temp_max -
              predictedTempRecord.predicted_temp_max
          );
          let tempMinDelta = Math.abs(
            actualTempRecord.actual_temp_min -
              predictedTempRecord.predicted_temp_min
          );
          forecastRatingArray.push({
            forecast_id: predictedTempRecord.forecast_id,
            model_id: predictedTempRecord.model_id,
            forecast_type_id: predictedTempRecord.forecast_type_id,
            temp_max_delta: tempMaxDelta,
            temp_min_delta: tempMinDelta,
            rating_max: this.calculateForecastRating(tempMaxDelta),
            rating_min: this.calculateForecastRating(tempMinDelta),
          });
        }
        return 0;
      });
    });

    this.setState(
      {
        forecastRatingTable: forecastRatingArray,
      },
      () => {
        this.insertForecastRatingRecords();
      }
    );
  }

  calculateForecastRating(temp) {
    let tempRating = 0;

    if (temp <= "1.5") {
      return (tempRating = 5);
    } else if (temp <= "2.5") {
      return (tempRating = 4);
    } else if (temp <= "1.5") {
      return (tempRating = 3);
    } else {
      return (tempRating = 2);
    }
  }

  insertForecastRatingRecords() {
    const { forecastRatingTable } = this.state;

    forecastRatingTable.forEach((forecastRatingRecord) => {
      fetch("/api/forecastRating/", {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(forecastRatingRecord),
      });
    });
  }

  insertModelsRatingRecords() {
    fetch("/api/modelsRating/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  selectModelsRatingTable() {
    fetch("/api/modelsRating/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonData) => {
        this.setState({
          modelsRatingTable: jsonData,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleForecastType(type) {
    this.selectModelsRatingTable();

    this.setState({
      currentForecastType: type,
    });
  }

  render() {
    const {
      currentForecastType,
      predictedTempTable,
      actualTempTable,
      modelsRatingTable,
    } = this.state;
    return (
      <div>
        <Menu handleForecastType={(type) => this.handleForecastType(type)} />
        <Accuweather
          predictedTempTable={predictedTempTable}
          actualTempTable={actualTempTable}
          modelsRatingTable={modelsRatingTable}
          forecastType={currentForecastType}
        />
        <Wunderground
          predictedTempTable={predictedTempTable}
          actualTempTable={actualTempTable}
          modelsRatingTable={modelsRatingTable}
        />
        <Meteo
          predictedTempTable={predictedTempTable}
          actualTempTable={actualTempTable}
          modelsRatingTable={modelsRatingTable}
        />
        <OpenWeatherMap
          predictedTempTable={predictedTempTable}
          actualTempTable={actualTempTable}
          modelsRatingTable={modelsRatingTable}
        />
        <Yrno
          predictedTempTable={predictedTempTable}
          actualTempTable={actualTempTable}
          modelsRatingTable={modelsRatingTable}
        />
        <YandexPogoda
          predictedTempTable={predictedTempTable}
          actualTempTable={actualTempTable}
          modelsRatingTable={modelsRatingTable}
        />
      </div>
    );
  }
}

export default Content;
