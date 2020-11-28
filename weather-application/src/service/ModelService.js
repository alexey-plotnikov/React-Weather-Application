import React from "react";

class ModelService extends React.Component {
  predictedTempRecords(modelId) {
    return fetch("/api/predictedTemp/" + modelId).then((res) => res.json());
  }

  actualTempRecords(modelId) {
    return fetch("/api/actualTemp/" + modelId).then((res) => res.json());
  }

  tempDeltaCalculation(predictedTempRecords, actualTempRecords) {
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
            rating_max: this.forecastRating(tempMaxError),
            rating_min: this.forecastRating(tempMinError),
          });
        }
        return 0;
      });
    });

    console.log("ARRAY:", forecastErrorsArray);
    return forecastErrorsArray;
  }

  forecastRating(temp) {
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

  forecastRatingRecords(forecastRatingRecords) {
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

  modelsRatingRecords() {
    fetch("/api/modelsRating/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default ModelService;
