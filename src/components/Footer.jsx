import React from "react";
import { Link } from "react-router-dom";
import backgroundSmartMinds from "../assets/background-S.M.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img
                src={backgroundSmartMinds}
                alt=""
                className="footer__logo--img"
              />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <span to="/" className="footer__link no-cursor">
              About
            </span>
            <Link to="/books" className="footer__link">
              Books
            </Link>
            <Link to="/Cart" className="footer__link">
              Cart
            </Link>
            <div className="footer__copyright">
              Copyright &copy; 2023 Library
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
