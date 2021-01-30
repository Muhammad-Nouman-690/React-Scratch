import React, { useEffect, useState } from "react";
import "../WeddingList/WeddingList.css";
import Button from "../../Components/Button/Button";
import { getVenue } from "../../Server/Server";
import { BsPeople } from "react-icons/bs";
import { AiOutlineTag } from "react-icons/ai";
import Pricing from '../RequestPricing/Pricing';

const WeddingList = () => {
  const [venue, setVenue] = useState([]);

  function getListVenue(num) {
    const venue = getVenue();

    return venue.filter((item, index) => {
      if (num > index) {
        return item;
      }
    });
  }

  useEffect(() => {
    setVenue(getListVenue(5));
  }, []);

  return (
    <div>
      <div className="container">
        {venue.map((item) => (
          <div key={item.id} className="row p-2">
            <div className="col-md-3">
              <div className="form-group">
                <label className='side-bar-title'>
                  {item.side_bar}
                </label>
                <select
                  multiple
                  className="form-control"
                  id="exampleFormControlSelect2"
                >
                  <option>{item.one}</option>
                  <option>{item.two}</option>
                  <option>{item.three}</option>
                  <option>{item.four}</option>
                  <option>{item.five}</option>
                  <option>{item.six}</option>
                  <option>{item.seven}</option>
                </select>
              </div>
            </div>

            <div className="col-md-3">
              <img src={item.venue_img} alt="" />
            </div>
            <div className="col-md-6">
              <h5 className="venue-title">{item.venue_title}</h5>
              <p className="venue-para ">{item.venue_desc}</p>
              <div className="venue-list">
                <div className="venue-item">
                  Price Per Plate <br />
                  <strong> {item.venue_price} </strong>
                </div>
                <div className="venue-item">
                  <BsPeople /> Guests <br />
                  <strong> {item.venue_guest} </strong>
                </div>
                <div className="venue-item">
                  Deals <br />
                  <strong>
                    <AiOutlineTag /> 1
                  </strong>
                </div>
                <span data-toggle="modal" data-target="#example__Modal">
                <Button className="venue-btn" button text="Request pricing" />
                <Pricing />
                </span>        
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingList;
