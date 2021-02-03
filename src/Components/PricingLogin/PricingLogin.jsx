import React, { useState } from "react";
import "./PricingLogin.css";
import firebase from "../Database/firebase";

const PricingLogin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [guest, setGuest] = useState("");
  const [msg, setMsg] = useState("");

  const addData = (e) => {
    e.preventDefault();

    firebase
      .database()
      .ref("/")
      .child("Request Pricing Details")
      .push([name, email, number, date, guest, msg]);

    console.log(name);
    console.log(email);
    console.log(number);
    console.log(date);
    console.log(guest);
    console.log(msg);

    alert("Your Request Pricing form has been submitted.");
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label>First Name and Last Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Phone Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
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
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Number of Guests</label>
            <input
              type="number"
              className="form-control"
              placeholder="Number of Guests"
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Your Message</label>
          <input
            type="text"
            className="form-control"
            placeholder="Write Your Message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
        </div>
        <button type="submit" onClick={addData} className="btn btn-danger ">
          Get Quote
        </button>
        <p>
          By clicking "Send Request" you are signing up and agreeing to the
          legal terms of Cupid-The Wedding Planner
        </p>
      </form>
      {/* {name} <br/>
      {email} <br/>
      {number} <br/>
      {date} <br/>
      {guest} <br/>
      {msg} <br/> */}
    </div>
  );
};

export default PricingLogin;
