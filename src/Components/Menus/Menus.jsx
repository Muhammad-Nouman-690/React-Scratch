import React from "react";
import "../Menus/Menus.css";
import { BsBriefcase } from "react-icons/bs";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import  Modal from "../Modal/Modal";
import ModalLogin from '../ModalLogin/ModalLogin';

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
           <h1><Link className="nav-link" to="/">
                  <img src={logo} className='main-logo' alt=""/>
                </Link></h1>
          </div>
          <div className="col-md-9">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link" to="/planning">
                  PLANNING TOOLS
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/venues">
                  WEDDING VENUES
                  </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/vendors">
                  WEDDING VENDORS
                  </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/brides">
                  BRIDES
                  </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/grooms">
                  GROOMS
                  </Link>
              </li>
              {/* <li className="nav-item">
              <Link className="nav-link" to="/ideas">
                  IDEAS
                  </Link>
              </li> */}
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal" data-target="#exampleModal" href="#">
                  LogIn
                </a>
              <ModalLogin  />
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal" data-target="#example_Modal" href="#">
                  SignUp
                </a>
                <Modal   />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;