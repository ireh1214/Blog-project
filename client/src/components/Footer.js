import React from "react";
import { Row } from "reactstrap";
import { TwitterShareButton, TwitterIcon } from "react-share";

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };



  return (
    <div id="main-footer" className="text-center">
      <Row>
        <p>
          Copyright &copy; <span>{thisYear()}</span> Hi_wolfy all rights
          reserved.
        </p>
        <TwitterShareButton>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>


      </Row>
    </div>
  );
};

export default Footer;
