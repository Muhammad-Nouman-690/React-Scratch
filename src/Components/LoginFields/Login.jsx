import React, { useState, useEffect } from "react";
import signup from "../../assets/signup.jpg";
import "../LoginFields/Login.css";
import firebase from "../Database/firebase";

const Login = ({
  Email = false,
  name,
  other = false,
  Btn_name,
  img = false,
}) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log('Successfully Login',user);
        alert('Successfully Login');
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={signup}
          alt=""
          className="signup-img"
          style={
            img === true
              ? { display: require("../../assets/signup.jpg") }
              : { display: require("../../assets/signupOne.jpg") }
          }
        />
        {firstName} <br />
        {lastName} <br />
        {email} <br />
        {password} <br />
      </div>
      <div className="col-md-6">
        <form>
          <div
            className="form-row"
            style={name === true ? { display: "div" } : { display: "none" }}
          >
            <div className="form-group col-md-6">
              <label>First Name</label>
              <input
                type="name"
                className="form-control"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Last Name</label>
              <input
                type="name"
                className="form-control"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
          </div>
          <div
            className="form-group"
            style={Email === true ? { display: "div" } : { display: "none" }}
          >
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="login-email"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="login-password"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div
            className="form-row"
            style={other === true ? { display: "div" } : { display: "none" }}
          >
            <div className="form-group col-md-6">
              <label>You Live in...</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label>City</label>
              <select className="form-control">
                <option>Choose</option>
                <option>Karachi</option>
                <option>Lahore</option>
                <option>Quetta</option>
              </select>
            </div>

            <div className="form-group col-md-6">
              <label>Event Date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label>Number</label>
              <input type="number" className="form-control" />
            </div>
          </div>
          <button
            type="submit"
            value="submit"
            onClick={handleForm}
            className="btn btn-danger"
          >
            {Btn_name}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
