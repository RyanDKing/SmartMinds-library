import React from "react";
import Logo from "../assets/SmartMinds.png";

const Landing = () => {
  return (
    <section className="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Canada's library platform for Grades 3 to 12</h1>
            <h2>
              Find your dream book with{" "}
              <span className="orange">Smart Minds</span>
            </h2>
            <a href="#features">
              <button className="btn">Browse Books</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={Logo} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
