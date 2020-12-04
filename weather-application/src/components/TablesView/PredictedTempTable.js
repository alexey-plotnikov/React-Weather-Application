import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { PredictedTempTableConstants } from "common/constants";

import "./PredictedTempTable.css";

const Tables = (props) => {
  const { predictedTempTable } = props;

  return (
    <Container className="predicted-temp">
      <Row className="predicted-temp__header align-items-center">
        <Col>{PredictedTempTableConstants.TABLE_NAME}</Col>
      </Row>
      <Row className="predicted-temp__table-header">
        <Col className="predicted-temp-table__table-header__table-col">
          {PredictedTempTableConstants.MODEL_NAME}
        </Col>
        <Col className="predicted-temp-table__table-header__table-col">
          {PredictedTempTableConstants.FORECAST_DATE}
        </Col>
        <Col className="predicted-temp-table__table-header__table-col">
          {PredictedTempTableConstants.PREDICTED_TEMP_MAX}
        </Col>
        <Col className="predicted-temp-table__table-header__table-col">
          {PredictedTempTableConstants.PREDICTED_TEMP_MIN}
        </Col>
        <Col className="predicted-temp-table__table-header__table-col">
          {PredictedTempTableConstants.FORECAST_TYPE_ID}
        </Col>
      </Row>
      <ul className="list">
        {predictedTempTable.map(
          ({
            model_id,
            forecast_date,
            predicted_temp_max,
            predicted_temp_min,
            forecast_type_id,
          }) => (
            <li
              key={
                model_id +
                forecast_type_id +
                new Date(forecast_date).toLocaleDateString("en-CA")
              }
            >
              <Row className="predicted-temp-table__table-row">
                <Col className="predicted-temp-table__table-row__table-col">
                  {model_id}
                </Col>
                <Col className="predicted-temp-table__table-row__table-col">
                  {new Date(forecast_date).toLocaleDateString("en-CA")}
                </Col>
                <Col className="predicted-temp-table__table-row__table-col">
                  {predicted_temp_max}
                </Col>
                <Col className="predicted-temp-table__table-row__table-col">
                  {predicted_temp_min}
                </Col>
                <Col className="predicted-temp-table__table-row__table-col">
                  {forecast_type_id}
                </Col>
              </Row>
            </li>
          )
        )}
      </ul>
    </Container>
  );
};

export default Tables;
