import React from "react";

import Model from "components/Model/Model";
import ModelService from "service/ModelService";
import { ModelsValues, PredictedTemp } from "common/databaseValues";
import models from "server/db/models";

class Accuweather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      predictedTempTable: this.props.predictedTempTable,
      actualTempTable: this.props.actualTempTable,
      modelsRatingTable: this.props.modelsRatingTable,
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      // let result = predictedTempTable.filter(
      //   (record) => record.model_id === modelId
      // );
      this.sortPredictedTempTable();
      this.sortActualTempTable();
      this.sortModelsRaitingTable();
    }
  }

  sortPredictedTempTable() {
    const { predictedTempTable } = this.props;

    this.setState(
      {
        predictedTempTable: new ModelService().sortPredictedTempTable(
          predictedTempTable,
          ModelsValues.ACCUWEATHER
        ),
      },
      () => console.log("predictedTempRecords: ", this.state.predictedTempTable)
    );
  }

  sortActualTempTable() {
    const { actualTempTable } = this.props;

    this.setState(
      {
        actualTempTable: new ModelService().sortActualTempTable(
          actualTempTable,
          ModelsValues.ACCUWEATHER
        ),
      },
      () => console.log("actualTempTable: ", this.state.actualTempTable)
    );
  }

  sortModelsRaitingTable() {
    const { modelsRatingTable } = this.props;
    this.setState(
      {
        modelsRatingTable: new ModelService().sortModelsRatingTable(
          modelsRatingTable,
          ModelsValues.ACCUWEATHER
        ),
      },
      () => console.log("modelsRatingTable: ", this.state.modelsRatingTable)
    );
  }

  render() {
    const { modelsRatingTable } = this.state;
    return (
      <div>
        This is a accuweather component
        <Model modelsRatingTable={modelsRatingTable} />
      </div>
    );
  }
}

export default Accuweather;
