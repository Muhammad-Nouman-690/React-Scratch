import React from "react";
import FooterIcon from "../../assets/footer.png";
import "../Footer/Footer.css";
import { BsChevronDown } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-nav">
<div className="container">
    <div className="row">
        <div className="col"><p className='footer-title'>Choose a country</p>
        <hr className='line-footer'/>
        <div className='country-list'>
<ul className='country-order'>
    <li><strong>America</strong></li>
    <li>Mexico</li>
    <li>Chile</li>
    <li>Argentia</li>
    <li>Brrazil</li>
    <li>Colombia</li>
    <li>Peru</li>
    <li>Uruguay</li>
    <li>Canada</li>
</ul>
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
        </div>
        </div>
        <div className="col"><p className='footer-title'>Information</p>
        <hr className='line-footer'/>
        </div>
        <div className="col"><p className='footer-title'>Get the WeddingWire app</p>
        <hr className='line-footer'/>
        </div>
        <div className="col"><p className='footer-title'>Follow us on</p>
        <hr className='line-footer'/>
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
            <li className="footer-menu">Planning Tools</li>
            <li className="footer-menu">Wedding Venues</li>
            <li className="footer-menu">Wedding Vendors</li>
            <li className="footer-menu">Brides</li>
            <li className="footer-menu">Grooms</li>
            <li className="footer-menu">Ideas</li>
            <li className="footer-menu">Community</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
