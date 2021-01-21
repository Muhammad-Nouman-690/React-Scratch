import React, { useState, useEffect } from "react";
import "../Destination/Destination.css";
import { BsChevronRight } from "react-icons/bs";
import Heading from "../Heading/Heading";
import { getDestination } from "../../Server/Server";

const Destination = () => {
  const [destination, setDestination] = useState([]);

  function getWeddDestination(num) {
    const destination = getDestination();
    return destination.filter((item, index) => {
      if (num > index) {
        return item;
      }
    });
  }

  useEffect(() => {
    setDestination(getWeddDestination(6));
  }, []);

  return (
    <div>
      <Heading title="Plan your destination wedding" line={false} />
      <p className="Sec-Real text-center">
        No matter where in the world you want to get married, WeddingWire's{" "}
        <br /> directory of international wedding professionals can help you
        celebrate.
      </p>
      <div className="container">
        <div className="row">
          {destination.map((item) => (
            <div key={item.id} className="col">
              <img src={item.image_url} className="Des-img" alt="" />
              <div className="des-title">
                <a href="#" className="des-content">
                  {item.image_title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center p-4">
        <a href="#" className="next-link-art">
          SEE ALL DESTINATIONS <BsChevronRight className="icon-articles" />
        </a>
      </div>
    </div>
  );
};

export default Destination;
