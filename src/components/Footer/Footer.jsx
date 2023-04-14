import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="app__footer">
      <ContentWrapper>
        <ul className="app__footer_menu-items">
          <li className="app__footer_menu-item-list">terms of use</li>
          <li className="app__footer_menu-item-list">privacy policy</li>
          <li className="app__footer_menu-item-list">about</li>
          <li className="app__footer_menu-item-list">blog</li>
          <li className="app__footer_menu-item-list">FAQ</li>
        </ul>
        <div className="app__footer_info_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ex
          impedit cumque enim fugit quod dignissimos debitis ratione quos eaque
          maiores, optio nemo! Maiores voluptatibus soluta minima possimus
          voluptate libero?
        </div>
        <div className="app__footer_social-icons">
          <span className="app__footer_social-icon">
            <FaFacebookF />
          </span>
          <span className="app__footer_social-icon">
            <FaInstagram />
          </span>
          <span className="app__footer_social-icon">
            <FaTwitter />
          </span>
          <span className="app__footer_social-icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
