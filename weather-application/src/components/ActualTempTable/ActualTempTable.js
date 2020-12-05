import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ActualTempTableConstants } from "common/constants";

import "./ActualTempTable.css";

const ActualTempTable = (props) => {
  const { actualTempTable } = props;

  return (
    <Container className="actual-temp">
      <Row className="actual-temp__header align-items-center">
        <Col>{ActualTempTableConstants.TABLE_NAME}</Col>
      </Row>
      <Row className="actual-temp__table-header">
        <Col className="actual-temp-table__table-header__table-col">
          {ActualTempTableConstants.MODEL_NAME}
        </Col>
        <Col className="actual-temp-table__table-header__table-col">
          {ActualTempTableConstants.FORECAST_DATE}
        </Col>
        <Col className="actual-temp-table__table-header__table-col">
          {ActualTempTableConstants.ACTUAL_TEMP_MAX}
        </Col>
        <Col className="actual-temp-table__table-header__table-col">
          {ActualTempTableConstants.ACTUAL_TEMP_MIN}
        </Col>
        <Col className="actual-temp-table__table-header__table-col">
          {ActualTempTableConstants.FORECAST_TYPE}
        </Col>
      </Row>

      <ul className="list">
        {actualTempTable.map(
          ({
            model_id,
            model_name,
            forecast_date,
            actual_temp_max,
            actual_temp_min,
            forecast_type_id,
            type_description,
          }) => (
            <li
              key={
                model_id +
                forecast_type_id +
                new Date(forecast_date).toLocaleDateString("en-CA")
              }
            >
              <Row className="actual-temp-table__table-row">
                <Col className="actual-temp-table__table-row__table-col">
                  {model_name}
                </Col>
                <Col className="actual-temp-table__table-row__table-col">
                  {new Date(forecast_date).toLocaleDateString("en-CA")}
                </Col>
                <Col className="actual-temp-table__table-row__table-col">
                  {actual_temp_max}
                </Col>
                <Col className="actual-temp-table__table-row__table-col">
                  {actual_temp_min}
                </Col>
                <Col className="actual-temp-table__table-row__table-col">
                  {type_description}
                </Col>
              </Row>
            </li>
          )
        )}
      </ul>
    </Container>
  );
};

export default ActualTempTable;
