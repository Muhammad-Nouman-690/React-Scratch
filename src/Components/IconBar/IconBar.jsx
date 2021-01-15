import React from "react";
import "../IconBar/IconBar.css";
import {
  BsSearch,

  BsFillPeopleFill,
  BsCodeSlash,
} from "react-icons/bs";
import { FaCalculator, FaComments, FaMoneyCheck } from "react-icons/fa";

const IconBar = () => {
  return (
    <div className="container p-4 text-center">
      <div className="row p-4">
        <div className="col ">
          <BsSearch className="icon-logo" />
          <p >
            Manage your
            <br />
            wedding vendors
          </p>
        </div>
        <div className="col ">
          <BsFillPeopleFill className="icon-logo" />
        <p> Organize Your
            <br/>
            Guest List
        </p>
        </div>
        <div className="col ">
          <FaMoneyCheck className="icon-logo" />
        <p>Stay on track with<br/>your Checklist</p>
        </div>
        <div className="col ">
          <FaCalculator className="icon-logo" />
        <p>Manage Your<br/>Budget</p>
        </div>
        <div className="col ">
          <FaComments className="icon-logo" />
        <p>Community of<br/>couples</p>
        </div>
        <div className="col  ">
          <BsCodeSlash className="icon-logo" />
        <p> Create your free<br/>Wedding Website</p>
        </div>
        
        
      </div>
      <button type="button" class="btn btn-lg icon-btn">Start planning your wedding</button>
      <hr/>
    </div>
    
  );
};

export default IconBar;
