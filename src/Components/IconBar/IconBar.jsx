import React from "react";
import "../IconBar/IconBar.css";
import { BsSearch, BsFillPeopleFill, BsCodeSlash } from "react-icons/bs";
import { FaCalculator, FaComments, FaMoneyCheck } from "react-icons/fa";
//import Button from '../Button/Button'
//import Modal from "../Modal/Modal";

const IconBar = () => {
  return (
    <div className="container p-4 text-center">
      <div className="row p-4">
        <div className="col ">
          <BsSearch className="icon-logo " />
          <p className="icon-text">
            Manage your
            <br />
            wedding vendors
          </p>
        </div>
        <div className="col ">
          <BsFillPeopleFill className="icon-logo" />
          <p className="icon-text">
            Organize Your
            <br />
            Guest List
          </p>
        </div>
        <div className="col ">
          <FaMoneyCheck className="icon-logo" />
          <p className="icon-text">
            Stay on track with
            <br />
            your Checklist
          </p>
        </div>
        <div className="col ">
          <FaCalculator className="icon-logo" />
          <p className="icon-text">
            Manage Your
            <br />
            Budget
          </p>
        </div>
        <div className="col ">
          <FaComments className="icon-logo" />
          <p className="icon-text">
            Community of
            <br />
            couples
          </p>
        </div>
        <div className="col  ">
          <BsCodeSlash className="icon-logo" />
          <p className="icon-text">
            Create your free
            <br />
            Wedding Website
          </p>
        </div>
      </div>
  {/* <span data-toggle="modal" data-target="#example_Modal">   
  <Button button text='Start planning your wedding'/>
  <Modal  />
  </span> */}
      <hr />
    </div>
  );
};

export default IconBar;