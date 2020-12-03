import React from "react";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./Menu.css";
import { MenuValues } from "common/menuValues";
import { MenuConstants, ModelConstants } from "common/constants";

const Menu = (props) => {
  const { loadView } = props;
  return (
    <div>
      <Container fluid className="menu">
        <Row xs={2} md={4} lg={6}>
          <Col
            className="menu__tables-view-button button button-test"
            onClick={() => loadView(MenuValues.TABLES_VIEW)}
          >
            {MenuConstants.ONE_DAY_FORECAST}
          </Col>
          <Col
            className="menu__models-rating-button button button-test"
            onClick={() => loadView(MenuValues.MODELS_RATING)}
          >
            {MenuConstants.WEEK_FORECAST}
          </Col>
        </Row>
        <Row className="menu__table-header align-items-center">
          <Col>{ModelConstants.FORECAST_TYPE_DESCRIPTION}</Col>
          <Col>{ModelConstants.AVG_TEMP_MAX_DELTA}</Col>
          <Col>{ModelConstants.AVG_TEMP_MIN_DELTA}</Col>
          <Col>{ModelConstants.AVG_MAX_TEMP_RATING}</Col>
          <Col>{ModelConstants.AVG_MIN_TEMP_RATING}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
