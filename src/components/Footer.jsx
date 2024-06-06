import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const iconSize = 30;

  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">Pack N Chew</div>
          <div className="right">
            <p>Address : </p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By xyz</p>
          </div>
          <div className="right">
            <a href="https://www.instagram.com" style={{ marginRight: "10px" }}>
              <FaInstagram size={iconSize} />
            </a>
            <a href="https://www.twitter.com" style={{ marginRight: "10px" }}>
              <FaTwitter size={iconSize} />
            </a>
            <a href="https://www.facebook.com">
              <FaFacebook size={iconSize} />
            </a>
            <p>All Rights Reserved !</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
