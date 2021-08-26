import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import "./DropDownBar.css";

function DropDownBar() {
  return (
    <div className="selectContainer">
      <p style={{ color: "black" }}> Sort By:</p>
      <select className="select" value="points">
        <option value="Alphabets">Alphabets</option>
        <option value="Points">Points</option>
      </select>
    </div>
  );
}

export default DropDownBar;
