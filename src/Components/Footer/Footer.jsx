import React from "react";
import FooterIcon from "../../assets/footer.png";
import "../Footer/Footer.css";
import { BsChevronDown } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import IOS from "../../assets/ios.png";
import ANDROID from "../../assets/android.png";
import Expert from "../Expert/Expert";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
<div>
  <Expert />

    <div className="footer-nav ">
      <div className="container ">
        <div className="row">
          <div className="col">
            <p className="footer-title">Choose a country</p>
            <hr className="line-footer" />
            <div className="country-list">
              <ul className="country-order">
                <strong>America</strong>
                <li>Mexico</li>
                <li>Chile</li>
                <li>Argentia</li>
                <li>Brrazil</li>
                <li>Colombia</li>
                <li>Peru</li>
                <li>Uruguay</li>
                <li>Canada</li>
              </ul>
              <ul className="country-order-second">
                <strong>Europe</strong>
                <li>Spain</li>
                <li>France</li>
                <li>Italy</li>
                <li>United Kingdom</li>
                <li>Ireland</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <p className="footer-title">Information</p>
            <hr className="line-footer" />
            <ul className="country-order">
              <li>Contact Us</li>
              <li>Terms and Privacy</li>
              <li>Register your business</li>
              <li>About Us</li>
              <li>Wedding website</li>
            </ul>
          </div>
          <div className="col">
            <p className="footer-title">Get the WeddingWire app</p>
            <hr className="line-footer" />
            <img src={IOS} alt="" />
            <img src={ANDROID} className="app-icon" alt="" />
          </div>
          <div className="col">
            <p className="footer-title">Follow us on</p>
            <hr className="line-footer" />
            <ul className="country-order">
              <li>
                {" "}
                <FaFacebookF /> Facebook
              </li>
              <li>
                {" "}
                <FaTwitter /> Twitter
              </li>
              <li>
                {" "}
                <FaPinterest /> Pinterest
              </li>
              <li>
                {" "}
                <FaInstagram /> Instagram
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="flert">
          <div className="footer-flags">
            PAKISTAN
            <BsChevronDown className="foo-icon" />
          </div>
          <img src={FooterIcon} alt="" />
        </div>
        <div className="over-flow">
          <ul className="footer-menu">
            <li> <Link  className="footer-menu" to="/planning">
                  planning tools
                </Link></li>
            <li ><Link  className="footer-menu" to="/venues">
                  wedding venues
                </Link></li>
            <li ><Link  className="footer-menu" to="/vendors">
                  wedding vendors
                </Link></li>
            <li ><Link  className="footer-menu" to="/brides">
                  brides
                </Link></li>
            <li ><Link  className="footer-menu" to="/grooms">
                  grooms
                </Link></li>
            <li ><Link  className="footer-menu" to="/ideas">
                  ideas
                </Link></li>            
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
