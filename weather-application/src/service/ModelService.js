import React from "react";
import predictedTempRecords from "server/db/predictedTemp";

class ModelService extends React.Component {
  sortPredictedTempTable(predictedTempTable, modelId) {
    let result = predictedTempTable.filter(
      (record) => record.model_id === modelId
    );

    return result;
  }

  sortActualTempTable(actualTempTable, modelId) {
    let result = actualTempTable.filter((record) => record.model_id == modelId);

    return result;
  }

  sortModelsRatingTable(modelsRatingTable, modelId) {
    let result = modelsRatingTable.filter(
      (record) => record.model_id == modelId
    );

    return result;
  }
}

export default ModelService;
