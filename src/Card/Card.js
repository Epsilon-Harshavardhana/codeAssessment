import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

function CardElement({ image, title, points }) {
  const { basePointsToCharge, originalBasePointsToCharge } = points;
  return (
    <Card className="mb-3" style={{ width: "20em", height: "11em" }}>
      <Container>
        <Row>
          <Col className="column">
            <Card.Img
              className="mr-3"
              src={image}
              style={{ height: "5em", width: "3em" }}
            ></Card.Img>
          </Col>
          <Col style={{ flex: 1 }}>
            <Card.Title>
              {title}
              {basePointsToCharge !== originalBasePointsToCharge ? (
                <Col>
                  <p
                    style={{
                      color: "#1E3163",
                      marginTop: "4px",
                      marginBottom: "0"
                    }}
                  >
                    {points.basePointsToCharge}Points
                  </p>
                  <p
                    className="text-decoration-line-through"
                    style={{ color: "black" }}
                  >
                    {points.originalBasePointsToCharge}Points
                  </p>
                </Col>
              ) : (
                <p
                  style={{
                    color: "#1E3163",
                    marginTop: "4px",
                    marginBottom: "0"
                  }}
                >
                  {points.originalBasePointsToCharge}
                </p>
              )}
            </Card.Title>
            <Button className="btn-danger detailesButton">Details</Button>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default CardElement;
