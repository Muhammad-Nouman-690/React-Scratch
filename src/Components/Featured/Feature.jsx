import React, { useEffect } from "react";
import "./Feature.css";
import FeatCard1 from "../../assets/card1.jpg";
import FeatCard2 from "../../assets/card2.jpg";
import FeatCard3 from "../../assets/card3.jpg";
import Heading from "../Heading/Heading";
import Card from "../Card/Card";
import { getFeaturedVendors } from "../../Server/Server";

const Feature = () => {
  const features = getFeaturedVendors();

  return (
    <div>
      <Heading title="Featured wedding vendors" line={false} />

    <div className='container'>
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
