import React from "react";
import { TwitterShareButton, TwitterIcon } from "react-share";

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };



  return (
    <div id="main-footer" className="text-center">
      <div class="footerCont">
        <p>
          Copyright &copy; <span>{thisYear()}</span> @Hi_wolfy all rights
          reserved.  홈페이지에 대한 모든 저작권은 @Hi_wolfy에게 있음을 명시합니다.
        </p>
   
      </div>
    </div>
  );
};

export default Footer;
