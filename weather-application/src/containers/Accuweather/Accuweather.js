import React from "react";

import Model from "components/Model/Model";

class Accuweather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
    fetch("/api/models/" + this.props.forecastType + "")
      .then((res) => res.json())
      .then((customers) =>
        this.setState({ customers: customers }, () => console.log(customers))
      );
  }

  componentDidUpdate(prevProps) {
    if (this.props.forecastType !== prevProps.forecastType) {
      fetch("/api/models/" + this.props.forecastType + "")
        .then((res) => res.json())
        .then((customers) =>
          this.setState({ customers: customers }, () => console.log(customers))
        );
    }
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
