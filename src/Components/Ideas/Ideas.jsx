import React from "react";
import "../Ideas/Ideas.css";
import roundOne from '../../assets/roundOne.jpg'
import roundTwo from '../../assets/roundTwo.jpg'
import roundThree from '../../assets/roundThree.jpg'
import roundFour from '../../assets/roundFour.jpg'
import roundFive from '../../assets/roundFive.jpg'
import roundSix from '../../assets/roundSix.jpg'
import rNone from '../../assets/rNone.jpg'
import rNtwo from '../../assets/rNtwo.jpg'
import rNthree from '../../assets/rNthree.jpg'
import rNfour from '../../assets/rNfour.jpg'
import { BsChevronRight } from "react-icons/bs";


const Ideas = () => {
  return (
    <div className='p-4'>
      <h1 className="Real-wedd p-4">Ideas and tips</h1>
      <p className='Sec-Real text-center'>
      Get inspired with the latest trends and advice from our wedding experts
      </p>
<span className='text-seap '></span>
    <div className="container">
      <div className="row">
<div className="col round-main"> <img src={roundOne} className='round-photo' alt=""/> <p className='round-text'>Before the wedding</p> </div>        
<div className="col round-main"> <img src={roundTwo} className='round-photo' alt=""/> <p className='round-text'>The wedding ceremony</p> </div>        
<div className="col round-main"> <img src={roundThree} className='round-photo' alt=""/> <p className='round-text'>The wedding banquet</p> </div>        
<div className="col round-main"> <img src={roundFour} className='round-photo' alt=""/> <p className='round-text'>Service for your wedding</p> </div>        
<div className="col round-main"> <img src={roundFive} className='round-photo' alt=""/> <p className='round-text'>Wedding fashion</p> </div>        
<div className="col round-main"> <img src={roundSix} className='round-photo' alt=""/> <p className='round-text'>Health and beauty</p> </div>        
      </div>
    </div>

     
<div className="Next-main row">
    <div className="col-md-3"> <img src={rNone} className='round-Next' alt=""/> 
    <div className='text-next'>
  <span className='text-next-category'>planning your wedding</span>
    <a href="#" className='next-link'>The Experts' Guide to Planning an Intimate 50 people Wedding</a>
    </div>
    </div>
    <div className="col-md-3"> <img src={rNtwo} className='round-Next' alt=""/> 
    <div className='text-next'>
  <span className='text-next-category'>the services for your wedding</span>
  <a href="#" className='next-link'>Top Catering Trends and Tips for Intimate Weddings</a>
    </div>
     </div>
    <div className="col-md-3"> <img src={rNthree} className='round-Next' alt=""/> 
    <div className='text-next'>
  <span className='text-next-category'>wedding decoration</span>
  <a href="#" className='next-link'>The Wedding Decoration Trends You Need to Know for an Intimate Wedding</a>
    </div>
     </div>
    <div className="col-md-3"> <img src={rNfour} className='round-Next' alt=""/> 
    <div className='text-next'>
  <span className='text-next-category'>before the wedding</span>
  <a href="#" className='next-link'>COVID-19 Weddings Advice Guide</a>
    </div>
     </div>
</div>
<div className='text-center'>
<a href="#" className='next-link-art'>ALL ARTICLES <BsChevronRight className='icon-articles' /></a>
</div>

    </div>



  );
};

export default Ideas;
