import React from "react";
import { Container, Navbar, Col } from "react-bootstrap";
import { FiLogOut, FiMenu, FiSearch } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navBar.css";

function NavigationBar() {
  return (
    <div>
      <Navbar style={{ backgroundColor: "#1E3163" }}>
        <Container>
          <Col className="colum">
            <FiMenu color="white" />
            <p style={{ color: "white" }}> Menu </p>
          </Col>

          <img src={require("../images/Group 5.png")} alt="logo" />
          <Col className="colum">
            <FiSearch color="white" />
            <p style={{ color: "white" }}> Search </p>
          </Col>

          <Col className="colum">
            <FiLogOut color="white" />
            <p style={{ color: "white" }}> Logout </p>
          </Col>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavigationBar;
