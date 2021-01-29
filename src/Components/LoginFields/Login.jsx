import React from "react";
import { getLogin } from "../../Server/Server";
import signup from "../../assets/signup.jpg";
import signupOne from '../../assets/signupOne.jpg'
import '../LoginFields/Login.css'

const Login = ({ Email = false, name, other = false, Btn_name, img = false}) => {
  const login = getLogin();

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={signup} alt="" className='signup-img'  style={img === true ? { display: require('../../assets/signup.jpg') } : { display: require('../../assets/signupOne.jpg') }} />
      </div>
      <div className="col-md-6">
      <form>
  <div className="form-row" style={name === true ? { display: "div" } : { display: "none" }} >
    <div className="form-group col-md-6">
      <label >First Name</label>
      <input type="name" className="form-control"  placeholder="First Name" />
    </div>
    <div className="form-group col-md-6">
      <label >Last Name</label>
      <input type="name" className="form-control"  placeholder="Last Name" />
    </div>
  </div>
  <div className="form-group"  style={Email === true ? { display: "div" } : { display: "none" }}>
    <label >{login.Email}</label>
    <input type="email" className="form-control"  placeholder="Email" />
  </div>
  <div className="form-group">
    <label >{login.Password}</label>
    <input type="password" className="form-control"  placeholder="Password" />
  </div>
  <div className="form-row" style={other === true ? { display: "div" } : { display: "none" }} >
    <div className="form-group col-md-6">
      <label >You Live in...</label>
      <input type="text" className="form-control"  />
    </div>
    <div className="form-group col-md-6">
      <label >City</label>
      <select  className="form-control">
        <option >Choose</option>
        <option>Karachi</option>
        <option>Lahore</option>
        <option>Quetta</option>
      </select>
    </div>

    <div className="form-group col-md-6">
      <label >Event Date</label>
      <input type="date" className="form-control"  />
    </div>
    <div className="form-group col-md-6">
      <label >Number</label>
      <input type="number" className="form-control"  />
    </div>
  </div>
  <button type="submit" className="btn btn-danger">{Btn_name}</button>
</form>
      </div>
    </div>
  );
};

export default Login;
