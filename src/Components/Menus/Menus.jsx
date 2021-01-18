import React from "react";
import "../Menus/Menus.css";
import { BsBriefcase } from "react-icons/bs";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Menus = () => {
  return (
    <div className="menu-top">
      <div className="container">
        <div className="row justify-content-end">
          <a className="menu-top-access " href="#">
            {" "}
            <BsBriefcase className="top-icon" /> Are You a Vendor?
          </a>
        </div>

        <div className="row p-1">
          <div className="col-md-1">
            <img src="{Logo}" className="Logo" alt="" />
          </div>
          <div className="col-md-9">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link" to="/planning">
                  PLANNING TOOLS
                </Link>
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
                  GROOMS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  IDEAS
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  LogIn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SignUp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;