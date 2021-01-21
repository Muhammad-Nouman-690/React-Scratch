import React from "react";
import "../PlanBanner/PlanBanner.css";
import Button from "../Button/Button";

const PlanBanner = ({ title, para , btnText, bgBanner = 'bg-banner' , bgBannerOne = 'bg-banner-One' }) => {
  return (
    <div className={bgBannerOne}>
      <div >
        <h1 className='bann-title'>{title}</h1>      
        <p className='bann-para'>{para}</p>
      </div>
      <Button text= {btnText}  button   />
      

    </div>
  );
};

export default PlanBanner;
