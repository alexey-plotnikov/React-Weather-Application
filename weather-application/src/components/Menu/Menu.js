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
  const { handleForecastType } = props;
  return (
    <div>
      <Container fluid className="menu">
        <Row>
          <Col xs={6}>
            <Button
              className="confirm-button"
              variant="secondary"
              onClick={() => handleForecastType(MenuValues.ONE_DAY_FORECAST)}
            >
              {MenuConstants.ONE_DAY_FORECAST}
            </Button>
          </Col>
          <Col>
            <Button
              className="confirm-button"
              variant="secondary"
              onClick={() => handleForecastType(MenuValues.WEEK_FORECAST)}
            >
              {MenuConstants.WEEK_FORECAST}
            </Button>
          </Col>
        </Row>
        <Row className="menu__table-header">
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
