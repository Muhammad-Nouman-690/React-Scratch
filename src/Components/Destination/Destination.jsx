import React from 'react';
import desOne from '../../assets/desOne.jpg'
import desTwo from '../../assets/desTwo.jpg'
import desThree from '../../assets/desThree.jpg'
import desFour from '../../assets/desFour.jpg'
import desFive from '../../assets/desFive.jpg'
import destSix from '../../assets/destSix.jpg'
import '../Destination/Destination.css'
import { BsChevronRight } from "react-icons/bs";

const Destination = () => {
    return(
<div>
<h1 className="Real-wedd p-4">Plan your destination wedding</h1>
      <p className='Sec-Real text-center'>
      No matter where in the world you want to get married, WeddingWire's <br/> directory of international wedding professionals can help you celebrate.
      </p>
<div className="container">
    <div className="row">
    <div className="col"><img src={desOne} className='Des-img' alt=""/>
    <div className="des-title">
        <a href="#" className="des-content">Argentina</a>
    </div>
    </div>
    <div className="col"><img src={desTwo} className='Des-img' alt=""/>
    <div className="des-title">
        <a href="#" className="des-content">Brazil</a>
    </div>
    </div>
    <div className="col"><img src={desThree} className='Des-img' alt=""/>
    <div className="des-title">
        <a href="#" className="des-content">Chile</a>
    </div>
    </div>
    <div className="col"><img src={desFour} className='Des-img' alt=""/>
    <div className="des-title">
        <a href="#" className="des-content">Colombia</a>
    </div>
    </div>
    <div className="col"><img src={desFive} className='Des-img' alt=""/>
    <div className="des-title">
        <a href="#" className="des-content">France</a>
    </div>
    </div>
    <div className="col"><img src={destSix} className='Des-img' alt=""/>
    <div className="des-title">
        <a href="#" className="des-content">Italy</a>
    </div>
    </div>
    </div>
</div>

<div className='text-center p-4'>
<a href="#" className='next-link-art'>SEE ALL DESTINATIONS <BsChevronRight className='icon-articles' /></a>
</div>


</div>
    );
}

export default Destination;