import React, { useEffect, useState } from "react";
import "./Feature.css";
import Heading from "../Heading/Heading";
import Card from "../Card/Card";
import { getVendors } from "../../Server/Server";

const Feature = () => {
  const [features, setFeatures] = useState([]);

  function getFeaturedVendors(num) {
    const features = getVendors();

    
    return features.filter((item, index) => {
      if (num > index) {
        return item;
      }
    });
  }

  useEffect(() => {
    setFeatures(getFeaturedVendors(3));
  }, []);

  return (
    <div>
      <Heading title="Featured wedding vendors" line={false} />

      <div className="container">
        <div className="row">
          {features.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
