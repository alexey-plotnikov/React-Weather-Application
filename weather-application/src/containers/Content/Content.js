import React from "react";

import Accuweather from "containers/Accuweather/Accuweather";
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

    // console.log(this.state.currentForecastType);
  }

  render() {
    const { currentForecastType } = this.state;
    return (
      <div>
        <Menu handleForecastType={(type) => this.handleForecastType(type)} />
        <Accuweather forecastType={currentForecastType} />
      </div>
    );
  }
}

export default Content;
