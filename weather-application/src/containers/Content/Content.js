import React from "react";

import Accuweather from "containers/Accuweather/Accuweather";
import Wunderground from "containers/Wunderground/Wunderground";
import Menu from "components/Menu/Menu";

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      currentForecastType: null,
    };
  }

  handleForecastType(type) {
    this.setState({
      currentForecastType: type,
    });
  }

  render() {
    const { currentForecastType } = this.state;
    return (
      <div>
        <Menu handleForecastType={(type) => this.handleForecastType(type)} />
        <Accuweather forecastType={currentForecastType} />
        <Wunderground forecastType={currentForecastType} />
      </div>
    );
  }
}

export default Content;
