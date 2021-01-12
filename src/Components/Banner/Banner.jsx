import React from "react";
import "../Banner/Banner.css";

const Banner = () => {
  return (
    <div className="banner-img">
      <div className="banner-text">
        <h1>Discover everything you need to plan your big day</h1>
        <h5>
          Search over 59000 local professionals with reviews, pricing, and more
        </h5>
        <form>
          <div className="form-row">
            <div className="col m-0 p-0">
              <input
                type="text"
                className="form-control  no-border"
                placeholder="Search For"
              />
            </div>
            <div className="col m-0 p-0">
              <input
                type="text"
                className="form-control  no-border "
                placeholder="Where"
              />
            </div>
            <button type="button" className="btn btn-danger btn-lg m-0">
              Find
            </button>
          </div>
          
        </form>
        <p className='banner-para'>
          Wedding Venues, Wedding Photography, Wedding Music, Bridal Jewellery, Wedding Invitations, Bridal Lehenga, Florists, Honeymoon
          </p>
      </div>
<hr />
      

    </div>


  );
};

export default Banner;
