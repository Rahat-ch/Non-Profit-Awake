import React from "react";
import { Link } from "react-router-dom";
// import "../../../app/assets/stylesheets/navbar/navbar.css"";
import Signup from "../modals/signup_modal";

const Navbar = () => {
  const indexPageNavbar = () => {
    return (
      <div className="index-nav">
        <Link to="/" className="header-link">
          <section className="left-nav">
            <img src="#" alt="logo" className="logo"/>
            <div className="title">Non-Profit Awake</div>
          </section>
        </Link>
        <div className="right-nav">
            <Signup />
            <button className="signup-login-btn">Login</button>
        </div>
      </div>
    );
  }

  const navbar = () => {
    return (
      <div className="index-nav">
        <Link to="/" className="header-link">
          <section className="left-nav">
            <img src="#" alt="logo" className="logo"/>
            <div className="title">Non-Profit Awake</div>
          </section>
        </Link>
        <div className="right-nav">
          <nav className="login-signup">
            <div className="username">Hello,......</div>
            <button className="signup-login-btn">Sign Out</button>
          </nav>
        </div>
      </div>
    );
  }

  // return currentUser ? navbar() : indexPageNavbar();
  return indexPageNavbar();
};

export default Navbar;