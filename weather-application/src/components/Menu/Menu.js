import React from "react";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Menu.css";
import { MenuValues } from "common/menuValues";
import { MenuConstants } from "common/constants";

const Menu = (props) => {
  const { loadView, activeBtn } = props;

  const activeButton = (type) => {
    if (type === activeBtn) {
      return MenuConstants.ACTIVE_BUTTON;
    }
  };

  return (
    <div>
      <Container fluid className="menu">
        <Row xs={2} md={4} lg={6} className="menu__buttons">
          <Col
            className={`menu__tables-view-button button ${activeButton(
              MenuValues.TABLES_VIEW
            )}`}
            onClick={() => loadView(MenuValues.TABLES_VIEW)}
          >
            {MenuConstants.TABLES_VIEW}
          </Col>
          <Col
            className={`menu__models-rating-button button ${activeButton(
              MenuValues.MODELS_RATING
            )}`}
            onClick={() => loadView(MenuValues.MODELS_RATING)}
          >
            {MenuConstants.MODELS_RATING_VIEW}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
