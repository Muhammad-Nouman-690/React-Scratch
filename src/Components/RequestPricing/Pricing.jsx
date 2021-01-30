import React from "react";
import "../RequestPricing/Pricing.css";

const Pricing = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="example__Modal"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog" >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Get Quote from Ankit Vista Green Village
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <form>
  <div className="form-group">
    <label >First Name and Last Name</label>
    <input type="name" className="form-control" placeholder="Enter Name" />
  </div>
  
  <div className="form-row">
    <div className="form-group col-md-6">
      <label >Email</label>
      <input type="email" className="form-control" placeholder="Email" />
    </div>
    <div className="form-group col-md-6">
      <label >Number</label>
      <input type="number" className="form-control" placeholder="Phone Number" />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group col-md-6">
      <label >Event Date</label>
      <input type="date" className="form-control" placeholder="Event Date" />
    </div>
    <div className="form-group col-md-6">
      <label >Number of Guests</label>
      <input type="number" className="form-control" placeholder="Number of Guests" />
    </div>
  </div>

  <div className="form-group">
    <label >Your Message</label>
    <input type="text" className="form-control" placeholder="Write Your Message" />
  </div>

</form>

            </div>
            <div className="modal-footer">              
              <button type="button" className="btn btn-danger ">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
