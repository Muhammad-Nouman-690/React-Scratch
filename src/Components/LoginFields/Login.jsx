import React, { useState } from "react";
import signup from "../../assets/signup.jpg";
import "../LoginFields/Login.css";
import firebase from "../Database/firebase";
import { FaFacebookF } from "react-icons/fa";
import Firebase from 'firebase';

const Login = ({
  Email = false,
  name,
  other = false,
  Btn_name,
  img = false,
  fb_login = false,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [live, setLive] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log("Successfully Login", user);
        alert("Successfully Login");
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });

      firebase
      .database()
      .ref("/")
      .child("Signup Details")
      .push([firstName, lastName, email, password, live, city, date, number]);
  };

  const login_FB = () => {
    var provider = new Firebase.auth.FacebookAuthProvider();
  
    firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var user = result.user;
    
    let create_user = {
      name: user.displayName,
      email: user.email,
      profile: user.photoURL,
      uId: user.uid
    }

    console.log('User==>',create_user);
    
    firebase
    .database()
    .ref("/")
    .child(`FB Login Details/${user.uid}`)
    .set(create_user)

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });

  

  }

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
        {live} <br />
      </div>

      <div className="col-md-6">
        <p
          className="text-login"
          style={fb_login === true ? { display: "div" } : { display: "none" }}
        >
          Log in to your account
        </p>
        <button
          className="fb-login"
          type='button'
          onClick={login_FB}
          style={fb_login === true ? { display: "div" } : { display: "none" }}
        >
          <FaFacebookF color="#3B5998" /> Sign in with Facebook
        </button>
        <form>
          <p
            className="text-login"
            style={fb_login === true ? { display: "div" } : { display: "none" }}
          >
            Or log in with your email
          </p>
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
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label>Last Name</label>
              <input
                type="name"
                className="form-control"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
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
              onChange={(e) => setEmail(e.target.value)}
              required
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div
            className="form-row"
            style={other === true ? { display: "div" } : { display: "none" }}
          >
            <div className="form-group col-md-6">
              <label>You Live in...</label>
              <input
                type="text"
                className="form-control"
                value={live}
                onChange={(e) => setLive(e.target.value)}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label>City</label>
              <select
                className="form-control"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              >
                <option>Choose</option>
                <option>Karachi</option>
                <option>Lahore</option>
                <option>Quetta</option>
              </select>
            </div>

            <div className="form-group col-md-6">
              <label>Event Date</label>
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label>Number</label>
              <input
                type="number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
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
