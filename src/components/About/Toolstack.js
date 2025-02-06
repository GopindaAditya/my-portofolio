import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWindows,
  SiVisualstudiocode,
  SiKaggle,
  SiPostman,
  SiOpenai,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKaggle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
      </Col>
    </Row>
  );
}

export default Toolstack;
