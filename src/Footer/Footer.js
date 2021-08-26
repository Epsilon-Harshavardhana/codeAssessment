import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="mt-4 col column">
          <a href="#" className="mb-3 link-light">
            Contact Us
          </a>
          <a href="#" className="mb-3 link-light">
            Program Rules
          </a>
          <a href="#" class="mb-3 link-light">
            FAQs
          </a>
          <a href="#" class="mb-3 link-light">
            Privacy
          </a>
        </div>
        <div className="col mt-4">
          <img src={require("../images/Group 5.png")} />
        </div>
      </div>
      <hr />
      <div className="row" style={{ color: "white" }}>
        <br />
        2019 U.S. Bank
        <br />
        <br />
        The creditor and issuer of you card is U.S Bank National Association,
        pursuant to a license from Visa U.S.A Inc.
      </div>
    </div>
  );
}
export default Footer;
