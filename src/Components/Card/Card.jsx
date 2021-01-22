import React from "react";
import "../Card/Card.css";

const Card = (props) => {
  return (
<div className="card ">
      <img
        className="card-img-top "
        src={props.media[0].image_url}
        alt="Card image cap"
      />
      <div className="card-body shadow text-center ">
        <span className="card-category">{props.vendor_category}</span>
        <h5 className="card-title">{props.vendor_name}</h5>
        <span className="card-category">{props.vendor_second_category}</span>
      </div>
      <div className="list-group list-group-flush shadow">
        <div className="list-group-item">
          <div className="price-cat">
            Price per plate <br />
            <span className="price-rate">{props.price_per_plate}</span>
          </div>
          <div className="capc-cat">
            Capicity <br />
            <span className="price-rate">{props.number_of_guest}</span>
          </div>
        </div>
        <div className="list-group-item">
          The Ritz by FNP Gardens is a wedding banquet hall located in DLF Phase
          3, which is situated in the city of Gurgaon. It is one of the most
          luxurious wedding.
        </div>
      </div>
    </div>
    
  );
};

export default Card;