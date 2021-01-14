import React from "react";
import "../Menus/Menus.css";
import Logo from "../../assets/Logo-01.png";


const Menus = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <img src={Logo} className="Logo" alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                PLANNING TOOLS <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                WEDDING VENUES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                WEDDING VENDORS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BRIDES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                GROMS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                IDEAS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                COMMUNITY
              </a>
            </li>
          </ul>

          <a href="#" className="sign_login">
            Login
          </a>

          <a href="#" className="sign_login">
            Free Sign Up
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Menus;
