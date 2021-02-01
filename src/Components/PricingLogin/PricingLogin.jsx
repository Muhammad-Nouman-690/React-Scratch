import React from "react";
import "./PricingLogin.css";

const PricingLogin = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label>First Name and Last Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="Enter Name"
          />
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group col-md-6">
            <label>Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Event Date</label>
            <input
              type="date"
              className="form-control"
              placeholder="Event Date"
            />
          </div>
          <div className="form-group col-md-6">
            <label>Number of Guests</label>
            <input
              type="number"
              className="form-control"
              placeholder="Number of Guests"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Your Message</label>
          <input
            type="text"
            className="form-control"
            placeholder="Write Your Message"
          />
        </div>
      </form>
    </div>
  );
};

export default PricingLogin;
