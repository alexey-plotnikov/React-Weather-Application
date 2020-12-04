import React from "react";

import CurrentView from "containers/CurrentView/CurrentView";

import { MenuValues } from "common/menuValues";
import Menu from "components/Menu/Menu";

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      predictedTempTable: [],
      actualTempTable: [],
      forecastRatingTable: [],
      modelsRatingTable: [],
      currentView: MenuValues.TABLES_VIEW,
      activeButton: MenuValues.TABLES_VIEW,
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
          () => {
            this.sortForecastRating();
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
        if (
          actualTempRecord.model_id === predictedTempRecord.model_id &&
          actualTempRecord.forecast_date ===
            predictedTempRecord.forecast_date &&
          actualTempRecord.forecast_type_id ===
            predictedTempRecord.forecast_type_id
        ) {
          let tempMaxDelta = Math.abs(
            actualTempRecord.actual_temp_max -
              predictedTempRecord.predicted_temp_max
          );
          let tempMinDelta = Math.abs(
            actualTempRecord.actual_temp_min -
              predictedTempRecord.predicted_temp_min
          );
          forecastRatingArray.push({
            model_id: predictedTempRecord.model_id,
            forecast_date: new Date(
              predictedTempRecord.forecast_date
            ).toLocaleDateString("en-CA"),
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
        this.insertModelsRatingRecords();
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

  loadView(view) {
    this.selectModelsRatingTable();

    this.setState({
      currentView: view,
      activeButton: view
    });
  }

  render() {
    const {
      currentForecastType,
      predictedTempTable,
      actualTempTable,
      modelsRatingTable,
      currentView,
      activeButton,
    } = this.state;
    return (
      <div>
        <Menu
          loadView={(view) => this.loadView(view)}
          activeBtn={activeButton}
        />
        <CurrentView
          view={currentView}
          predictedTempTable={predictedTempTable}
          actualTempTable={actualTempTable}
          modelsRatingTable={modelsRatingTable}
        />
      </div>
    );
  }
}

export default Content;
