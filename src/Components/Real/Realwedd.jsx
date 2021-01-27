import React, { useState, useEffect } from "react";
import "./Realwedd.css";
import Heading from "../Heading/Heading";
import { BsChevronRight } from "react-icons/bs";
import { getReal } from "../../Server/Server";
import Button from '../../Components/Button/Button'

const Realwedd = () => {
  const [real, setReal] = useState([]);

  function getWeddReal(num) {
    const real = getReal();

    return real.filter((item, index) => {
      if (num > index) {
        return item;
      }
    });
  }

  useEffect(() => {
    setReal(getWeddReal(4));
  }, []);

  return (
    <div>
      <Heading
        title="Real Wedding"
        description="Browse by location to find wedding professionals in your area and view photos of their work"
      />
      <div className="container">
        <div className="row">
          {real.map((item) => (
            <div key={item.id} className="col-md-3">
              <img src={item.image} alt="..." className="img-thumbnail" />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center p-4">
        <a href="#" className="next-link-art">
          VIEW MORE WEDDINGS <BsChevronRight className="icon-articles" />
        </a>
      </div>
    </div>
  );
};

export default Realwedd;