import React from "react";
import VendorMessage from "../../Components/VendorMessage/VendorMessage";
import { Link } from "react-router-dom";

const Detail = (prop) => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="alert container">
            <h1 class="alert-heading">BOOK YOUR WEDDING</h1>
            <p className="cu_info">
              Cupid Wedding Planners & Events, we provide stress free planing.
            </p>
            <hr />
            <form action="submit">
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label>VENUE</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      id="validationDefaultUsername"
                      placeholder="Enter Location"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <label>CITY</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      id="validationDefaultUsername"
                      placeholder="Enter Your City"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <label>No. of Guests</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      id="validationDefaultUsername"
                      placeholder="Enter No. of Guests"
                      required
                    />
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
                <Link
                  type="submit"
                  class="btn btn-secondary search"
                  to="/Listing"
                >
                  Search
                </Link>
              </div>
            </form>

            <hr />

            <h1>Information about Cupid- The Wedding Planner</h1>
            <p className="cu_info">
              The Cupid is a wedding planning based in the city of Karachi and
              offers bespoke wedding plans for all your related events and
              functions. There is a requirement for a wedding organiser for all
              your wedding and related occasions and if you are somebody who is
              getting married and looking for a service that offers you tonnes
              of services for all your wedding functions. Situated in Karachi,
              The Cupid is your decision for every one of these requirements.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <VendorMessage />
        </div>
      </div>
    </section>
  );
};

export default Detail;
