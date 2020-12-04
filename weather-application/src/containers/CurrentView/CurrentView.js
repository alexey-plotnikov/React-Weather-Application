import React from "react";

import Tables from "containers/Tables/Tables";
import Accuweather from "containers/Accuweather/Accuweather";
import Wunderground from "containers/Wunderground/Wunderground";
import Meteo from "containers/Meteo/Meteo";
import OpenWeatherMap from "containers/OpenWeatherMap/OpenWeatherMap";
import Yrno from "containers/Yr.no/YrNo";
import YandexPogoda from "containers/Yandex.Pogoda/YandexPogoda";

import { MenuValues } from "common/menuValues";

class CurrentView extends React.Component {
  render() {
    const {
      predictedTempTable,
      actualTempTable,
      modelsRatingTable,
      view,
    } = this.props;

    if (view === MenuValues.TABLES_VIEW) {
      return (
        <Tables
          predictedTempTable={predictedTempTable}
          actualTempTable={actualTempTable}
        />
      );
    } else if (view === MenuValues.MODELS_RATING) {
      return (
        <div>
          <Accuweather
            predictedTempTable={predictedTempTable}
            actualTempTable={actualTempTable}
            modelsRatingTable={modelsRatingTable}
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
}

export default CurrentView;
