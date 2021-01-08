import React from 'react';
import '../Section/Section.css'
import { Link } from "react-router-dom";

const Section = () => {
    return (
  <div className="alert container" >
 <h4 class="alert-heading">BOOK YOUR WEDDING</h4>
  <p>Cupid Wedding Planners & Events, we provide stress free planing.</p>
  <hr />
  <form action="submit">
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label >VENUE</label>
      <div class="input-group">        
        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Enter Location"  required />
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label >CITY</label>
      <div class="input-group">        
        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Enter Your City"  required />
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label >No. of Guests</label>
      <div class="input-group">        
        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Enter No. of Guests"  required />
      </div>
    </div>
    <div class="dropdown">
 <select class="custom-select" id="inputGroupSelect01">
    <option selected>Select Wedding Function</option>
    <option value="1">MEHNDI</option>
    <option value="2">BARAAT</option>
    <option value="3">VALIMA</option>
  </select>
</div>
<Link type="submit" class="btn" to="/Listing">Search</Link>
 
  </div> 
 </form>
        </div>
    );
}

export default Section;