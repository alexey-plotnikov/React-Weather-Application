import React from "react";

import Model from "components/Model/Model";
import ModelService from "service/ModelService";
import { ModelsValues } from "common/databaseValues";

class Accuweather extends React.Component {
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
        ModelsValues.ACCUWEATHER
      ),
    });
  }

  sortActualTempTable() {
    const { actualTempTable } = this.props;

    this.setState({
      actualTempTable: new ModelService().sortActualTempTable(
        actualTempTable,
        ModelsValues.ACCUWEATHER
      ),
    });
  }

  sortModelsRaitingTable() {
    const { modelsRatingTable } = this.props;
    this.setState({
      modelsRatingTable: new ModelService().sortModelsRatingTable(
        modelsRatingTable,
        ModelsValues.ACCUWEATHER
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

export default Accuweather;
