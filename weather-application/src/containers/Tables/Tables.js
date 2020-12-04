import React from "react";

import PredictedTempTable from "components/TablesView/PredictedTempTable";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predictedTempTable: [],
      actualTempTable: [],
      modelsRatingTable: [],
    };
  }

  componentDidMount() {
      this.getPredictedTempTable();
  }

  getPredictedTempTable() {
      const {predictedTempTable} = this.props;

      this.setState({
        predictedTempTable: predictedTempTable
      })
  }

  render() {
    const {
      predictedTempTable,
      actualTempTable,
      modelsRatingTable,
    } = this.state;
    return (
      <div>
        <PredictedTempTable predictedTempTable={this.props.predictedTempTable} />
      </div>
    );
  }
}

export default Tables;
