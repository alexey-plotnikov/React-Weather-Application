import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ForecastRatingTableConstants } from "common/constants";

import "./ForecastRatingTable.css";

const ForecastRatingTable = (props) => {
  const { forecastRatingTable } = props;

  return (
    <Container className="actual-temp">
      <Row className="forecast-rating__header align-items-center">
        <Col>{ForecastRatingTableConstants.TABLE_NAME}</Col>
      </Row>
      <Row className="forecast-rating__table-header">
        <Col className="forecast-rating-table__table-header__table-col">
          {ForecastRatingTableConstants.MODEL_NAME}
        </Col>
        <Col className="forecast-rating-table__table-header__table-col">
          {ForecastRatingTableConstants.FORECAST_DATE}
        </Col>
        <Col className="forecast-rating-table__table-header__table-col">
          {ForecastRatingTableConstants.TEMP_MAX_DELTA}
        </Col>
        <Col className="forecast-rating-table__table-header__table-col">
          {ForecastRatingTableConstants.TEMP_MIN_DELTA}
        </Col>
        <Col className="forecast-rating-table__table-header__table-col">
          {ForecastRatingTableConstants.TEMP_MIN_DELTA}
        </Col>
        <Col className="forecast-rating-table__table-header__table-col">
          {ForecastRatingTableConstants.TEMP_MIN_DELTA}
        </Col>
        <Col className="forecast-rating-table__table-header__table-col">
          {ForecastRatingTableConstants.FORECAST_TYPE}
        </Col>
      </Row>

      <ul className="list">
        {forecastRatingTable.map(
          ({
            model_id,
            model_name,
            forecast_date,
            temp_max_delta,
            temp_min_delta,
            rating_max,
            rating_min,
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
              <Row className="forecast-rating-table__table-row">
                <Col className="forecast-rating-table__table-row__table-col">
                  {model_name}
                </Col>
                <Col className="forecast-rating-table__table-row__table-col">
                  {new Date(forecast_date).toLocaleDateString("en-CA")}
                </Col>
                <Col className="forecast-rating-table__table-row__table-col">
                  {temp_max_delta}
                </Col>
                <Col className="forecast-rating-table__table-row__table-col">
                  {temp_min_delta}
                </Col>
                <Col className="forecast-rating-table__table-row__table-col">
                  {rating_max}
                </Col>
                <Col className="forecast-rating-table__table-row__table-col">
                  {rating_min}
                </Col>
                <Col className="forecast-rating-table__table-row__table-col">
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

export default ForecastRatingTable;
