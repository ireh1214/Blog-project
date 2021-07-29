import React from "react";
import { Row, Col } from "reactstrap";

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <div id="main-footer" className="text-center">
      <Row>
        <Col>
          <p>
            Copyright &copy; <span>{thisYear()}</span> Hi_wolfy all rights
            reserved.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
