import React from "react";
import "../Category/Category.css";
import Heading from "../Heading/Heading";

const Category = () => {
  return (
    <div>
      <Heading title="Wedding vendors by category" line={false} />

      <div className="container">
        <div className="row">
          <div className="col cat-main">
            <a href="#" className="cat-title">
              WEDDING VENUES
            </a>
            <ul className="cat-list">
              <li className="cat-list-item">Banquet Halls</li>
              <li className="cat-list-item">Hotels</li>
              <li className="cat-list-item">Marriage Garden</li>
              <li className="cat-list-item">Kalyana Mandapams</li>
              <li className="cat-list-item">Resort & Destination Weddin</li>
              <li className="cat-list-item">Wedding Lawns & Farmhouses</li>
            </ul>
          </div>
          <div className="col cat-main">
            <a href="#" className="cat-title-second">
              WEDDING VENDORS
            </a>
            <ul className="cat-list">
              <li className="cat-list-item">Catering</li>
              <li className="cat-list-item">Wedding Invitations</li>
              <li className="cat-list-item">Wedding Gifts</li>
              <li className="cat-list-item">Wedding Photography</li>
              <li className="cat-list-item">Wedding Music</li>
              <li className="cat-list-item">Wedding Transportation</li>
            </ul>
          </div>
          <div className="col cat-main">
            <div className="Brides-cat">
              <a href="#" className="cat-bride">
                BRIDES
              </a>
              <ul></ul>
              <a href="#" className="cat-grooms">
                GROOMS
              </a>
              <ul></ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Category;
