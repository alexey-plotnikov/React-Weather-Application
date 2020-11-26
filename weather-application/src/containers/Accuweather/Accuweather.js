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
    this.test();
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
          forecastErrorsArray.push({
            forecast_id: pTempRec.forecast_id,
            temp_max_error: Math.abs(
              aTempRec.actual_temp_max - pTempRec.predicted_temp_max
            ),
            temp_min_error: Math.abs(
              aTempRec.actual_temp_min - pTempRec.predicted_temp_min
            ),
            rating_max: null,
            rating_min: null,
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
    console.log(forecastRatingRecords);

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
