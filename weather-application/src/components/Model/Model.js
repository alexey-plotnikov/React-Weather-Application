import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ModelConstants } from "common/constants";

import "./Model.css";

const Model = (props) => {
  const { modelsRatingTable } = props;

  let modelName = "";

  if (modelsRatingTable.length !== 0) {
    modelName = modelsRatingTable[0].model_name;
  }

  return (
    <Container className="model">
      <Row className="model__header align-items-center">
        <Col>{modelName}</Col>
      </Row>
      <Row className="menu__table-header align-items-center">
        <Col xs={2}className="menu__table-header__table-header-col">{ModelConstants.FORECAST_TYPE_DESCRIPTION}</Col>
        <Col className="menu__table-header__table-header-col">{ModelConstants.AVG_TEMP_MAX_DELTA}</Col>
        <Col className="menu__table-header__table-header-col">{ModelConstants.AVG_TEMP_MIN_DELTA}</Col>
        <Col className="menu__table-header__table-header-col">{ModelConstants.AVG_MAX_TEMP_RATING}</Col>
        <Col className="menu__table-header__table-header-col">{ModelConstants.AVG_MIN_TEMP_RATING}</Col>
      </Row>
      <ul className="list">
        {modelsRatingTable.map(
          ({
            model_id,
            forecast_type_id,
            type_description,
            avg_max_temp_delta,
            avg_min_temp_delta,
            avg_max_temp_rating,
            avg_min_temp_rating,
          }) => (
            <li key={(model_id, forecast_type_id)}>
              <Row className="model__table-row align-items-center">
                <Col xs={2} className="model__table-row__table-col">
                  {type_description}
                </Col>
                <Col className="model__table-row__table-col">
                  {avg_max_temp_delta}
                </Col>
                <Col className="model__table-row__table-col">
                  {avg_min_temp_delta}
                </Col>
                <Col className="model__table-row__table-col">
                  {avg_max_temp_rating}
                </Col>
                <Col className="model__table-row__table-col">
                  {avg_min_temp_rating}
                </Col>
              </Row>
            </li>
          )
        )}
      </ul>
    </Container>
  );
};

export default Model;
