import React from "react";

import Model from "components/Model/Model";

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
    // fetch("/api/predictedTemp/" + this.props.forecastType + "")
    this.getPredictedTempRecords();
    this.getActualTempRecords();
  }

  componentDidUpdate(prevProps) {
    if (this.props.forecastType !== prevProps.forecastType) {
      this.test();
    }
  }

  getPredictedTempRecords() {
    fetch("/api/predictedTemp/")
      .then((res) => res.json())
      .then((predictedTempRecords) =>
        this.setState({ predictedTempRecords }, () =>
          console.log(predictedTempRecords)
        )
      );
  }

  getActualTempRecords() {
    fetch("/api/actualTemp/")
      .then((res) => res.json())
      .then((actualTempRecords) =>
        this.setState({ actualTempRecords: actualTempRecords }, () => {
          console.log(actualTempRecords);
        })
      );
  }

  test() {
    const {
      predictedTempRecords,
      actualTempRecords,
      forecastRatingRecords,
    } = this.state;

    let forecastErrorsArray = [];

    predictedTempRecords.forEach((pTempRec) => {
      actualTempRecords.some((aTempRec) => {
        if (aTempRec.forecast_id === pTempRec.forecast_id) {
          let tempMaxError = Math.abs(
            aTempRec.actual_temp_max - pTempRec.predicted_temp_max
          );
          let tempMinError = Math.abs(
            aTempRec.actual_temp_min - pTempRec.predicted_temp_min
          );
          forecastErrorsArray.push({
            forecast_id: pTempRec.forecast_id,
            temp_max_delta: tempMaxError,
            temp_min_delta: tempMinError,
            rating_max: this.getForecastRating(tempMaxError),
            rating_min:  this.getForecastRating(tempMinError),
          });
        }
        return 0;
      });
    });

    this.setState(
      {
        forecastRatingRecords: forecastErrorsArray,
      },
      () => {
        this.test2();
      }
    );
  }

  test2() {
    const { forecastRatingRecords } = this.state;

    forecastRatingRecords.forEach((forecastRatingRec) => {
      fetch("/api/forecastRating/", {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(forecastRatingRec),
      });
    });
  }

  getForecastRating(temp) {
    let tempRating = 0;
    if (temp <= "1.5") {
      tempRating = 5;
      return tempRating;
    } else if (temp <= "2.5") {
      tempRating = 4;
    } else if (temp <= "1.5") {
      tempRating = 3;
    } else {
      tempRating = 2;
    }
    console.log(tempRating)
    return tempRating;
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
