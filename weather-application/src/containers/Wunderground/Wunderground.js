import React from "react";

import Model from "components/Model/Model";
import ModelService from "service/ModelService";
import { ModelsValues } from "common/databaseValues";

class Wunderground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      predictedTempTable: [],
      actualTempTable: [],
      modelsRatingTable: [],
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.sortPredictedTempTable();
      this.sortActualTempTable();
      this.sortModelsRaitingTable();
    }
  }

  sortPredictedTempTable() {
    const { predictedTempTable } = this.props;

    this.setState({
      predictedTempTable: new ModelService().sortPredictedTempTable(
        predictedTempTable,
        ModelsValues.WUNDERGROUND
      ),
    });
  }

  sortActualTempTable() {
    const { actualTempTable } = this.props;

    this.setState({
      actualTempTable: new ModelService().sortActualTempTable(
        actualTempTable,
        ModelsValues.WUNDERGROUND
      ),
    });
  }

  sortModelsRaitingTable() {
    const { modelsRatingTable } = this.props;
    this.setState({
      modelsRatingTable: new ModelService().sortModelsRatingTable(
        modelsRatingTable,
        ModelsValues.WUNDERGROUND
      ),
    });
  }

  render() {
    const { modelsRatingTable } = this.state;
    return (
      <div>
        <Model modelsRatingTable={modelsRatingTable} />
      </div>
    );
  }
}

export default Wunderground;
