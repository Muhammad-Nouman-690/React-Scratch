import React from "react";
import "../Menus/Menus.css";
import { BsBriefcase } from "react-icons/bs";
import Logo from "../../assets/logo-02.png";

const Menus = () => {
  return (
   <div className="menu-top">
     <div className="container">
       <div className="row justify-content-end">
         <a className='menu-top-access ' href="#"> <BsBriefcase className='top-icon'/> Are You a Vendor?</a>
       </div>
   
       <div className="row p-1">
         <div className="col-md-1"><img src='{Logo}' className='Logo' alt=""/></div>
         <div className="col-md-9">
         <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link" href="#">PLANNING TOOLS</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">WEDDING VENUES</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">WEDDING VENDORS</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">BRIDES</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">GROOMS</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">IDEAS</a>
  </li>
</ul>
         </div>
         <div className="col-md-2">
         <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link" href="#">LogIn</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">SignUp</a>
  </li>
</ul>
         </div>
       </div>
     


     </div>
   </div>
  );
};

export default Menus;
