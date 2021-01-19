import React from "react";
import "../PlanBanner/PlanBanner.css";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

const PlanBanner = () => {
  return (
    <div className="bg-banner text-center">
      <div className="centered">
        <Heading
          className="bann-title"
          title="Planning your wedding just got easier"
        />
        <p className='bann-para'>WeddingWire has everything you need to walk down <br/>
the aisle with our free suite of online wedding planning tools.</p>

<Button />
      </div>
    </div>
  );
};

export default PlanBanner;
