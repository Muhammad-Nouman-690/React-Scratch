import React, { useState } from "react";
import { Link } from "react-router-dom";
const Search = () => {
  const [weddingFunction, setWeddingFunction] = useState("");

  return (
    <div>
      <form action="submit">
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label>VENUE</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="validationDefaultUsername"
                placeholder="Enter Location"
                required
              />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label>CITY</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="validationDefaultUsername"
                placeholder="Enter Your City"
                required
              />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label>No. of Guests</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="validationDefaultUsername"
                placeholder="Enter No. of Guests"
                required
              />
            </div>
          </div>
          <div className="dropdown">
            <select
              className="custom-select"
              id="wedding-function"
              onChange={(e) => setWeddingFunction(e.target.value)}
              onBlur={(e) => setWeddingFunction(e.target.value)}
            >
              <option value="">Select Wedding Function</option>
              <option value="mehndi">MEHNDI</option>
              <option value="baraat">BARAAT</option>
              <option value="valima">VALIMA</option>
            </select>
          </div>
          <Link
            type="submit"
            className="btn btn-secondary search"
            to={`Listing/${weddingFunction}`}
          >
            Search
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Search;
