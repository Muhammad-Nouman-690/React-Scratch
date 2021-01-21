import React from "react";
import "../Venues/Venues.css";
import PlanBanner from "../../Components/PlanBanner/PlanBanner";
import ListBar from "../../Components/ListBar/ListBar";
import cardImg from "../../assets/card1.jpg";

const Venues = () => {
  return (
    <div>
      <hr />
      <ListBar name="Wedding venues" />
      <PlanBanner
        title="Wedding Venues"
        para="Wedding Venues: Check prices, request quotes and check availability for all types of wedding venues including banquet halls, hotels, palaces, farmhouses, tent houses and marriage halls."
        btnText="Venues"
      />
      <hr />
<div className='container search-bar'>
Your search: <button className='search-btn'>Wedding venues</button>
</div>
<hr/>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src={cardImg} alt="" />
          </div>
          <div className="col-md-9">
            <h5 className="venue-title">Club Platinum Resort</h5>
            <p className="venue-para">
              Club Platinum Resort is located in the city of Bahadurgarh. It is
              a great venue that offers a variety of services and choices, for a
              complete festive experience. They have multiple attractions for a
              week-long wedding extravaganza for your family and guests. If
              there is a place where fun and wedding... (Wedding reception)
            </p>
            <div className='venue-list'>
              <div>Price Per Plate</div>
              <div>Guests</div>
              <div>Deals</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venues;
