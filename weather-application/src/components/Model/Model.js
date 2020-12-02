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
    <Container fluid className="model">
      <Row className="model__header">
        <Col>{modelName}</Col>
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
              <Row className="model__table-item align-items-center">
                <Col className="model__table-item__col">{type_description}</Col>
                <Col className="model__table-item__col">{avg_max_temp_delta}</Col>
                <Col className="model__table-item__col">{avg_min_temp_delta}</Col>
                <Col className="model__table-item__col">{avg_max_temp_rating}</Col>
                <Col className="model__table-item__col">{avg_min_temp_rating}</Col>
              </Row>
            </li>
          )
        )}
      </ul>
    </Container>
  );
};

export default Model;
