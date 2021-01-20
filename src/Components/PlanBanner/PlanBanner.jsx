import React from "react";
import "../PlanBanner/PlanBanner.css";
import Button from "../Button/Button";

const PlanBanner = ({ title, para , btnText, bg_One = 'bg-banner', bg_Two = 'bg-banner-One'  }) => {
  return (
    <div className={bg_Two}>
      <div className="centered">
        <h1 className='bann-title'>{title}</h1>      
        <p className='bann-para'>{para}</p>
      </div>
      <Button text= {btnText}  button  />
      

    </div>
  );
};

export default PlanBanner;
