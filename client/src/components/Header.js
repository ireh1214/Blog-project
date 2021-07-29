import React from "react";
import { Row, Col } from "reactstrap";

const Header = () => {
  return (
    <div id="page-header" className="mb-3">
      <Row>
        <Col md="6" sm="auto" className="text-center m-auto">
           <p>날득이의 사이드 프로젝트</p> 
        </Col>
      </Row>
    </div>
  );
};
export default Header;