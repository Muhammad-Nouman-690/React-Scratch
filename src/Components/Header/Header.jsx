import React from 'react';
import '../Header/Header.css'
import Logo from '../../assets/Logo-01.png'
import Banner from '../Banner/Banner'
import { BsFillAlarmFill } from "react-icons/bs";
import IconBar from '../IconBar/IconBar'
import Feature from '../Featured/Feature'
import Realwedd from '../Real/Realwedd' 
import Ideas from '../Ideas/Ideas'
import Community from '../Community/Community'
import Destination from '../Destination/Destination'
import Category from '../Category/Category';
import Expert from '../Expert/Expert';

const Header = () => {
    return (
      <div>
      <div className='top-bar'>
      You're on our mind during COVID-19. See our related wedding FAQs.
      </div>
          <nav className="navbar navbar-expand-lg navbar-light ">
          <img src={Logo} className='Logo' alt=""/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav ">
      <li className="nav-item active">
        <a className="nav-link" href="#">PLANNING  TOOLS <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">WEDDING VENUES</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">WEDDING VENDORS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">BRIDES</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">GROMS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">IDEAS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">COMMUNITY</a>
      </li>
    </ul>

<a href='#' className="sign_login">Login</a>

<a href='#' className="sign_login">Free Sign Up</a>

  </div>

</nav>

<Banner />
<IconBar />
<Feature />
<Realwedd />
<Ideas />
<Community />
<Destination />
<Category />      
<Expert />
      </div>
    );
}

export default Header;