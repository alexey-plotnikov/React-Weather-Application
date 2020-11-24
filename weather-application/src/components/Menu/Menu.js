import React from "react";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./Menu.css";

const Menu = (props) => {
  const { handleForecastType } = props;
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6}>
            <Button
              className="confirm-button"
              variant="secondary"
              onClick={() => handleForecastType("1")}
            >
              1
            </Button>
          </Col>
          <Col>
            <Button
              className="confirm-button"
              variant="secondary"
              onClick={() => handleForecastType("2")}
            >
              3+
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
