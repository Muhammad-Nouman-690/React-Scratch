import React from "react";
import './Feature.css'
import FeatCard1 from '../../assets/card1.jpg'
import FeatCard2 from '../../assets/card2.jpg'
import FeatCard3 from '../../assets/card3.jpg'

const Feature = () => {
  return (
    <div>
      <h1 className='feat-head'>Featured wedding vendors</h1>
<div className="container p-4">
    <div className="row">
        <div className="col-md-4">
        <div class="feat-box" >
  <img class="card-img-top" src={FeatCard1} alt="Card image cap" />
  <div class="card-body text-center">
      <span className='upper-text '> MARRAIGE GAEDEN</span>
    <h5 class="card-title ">Balejio Banquet</h5>
    <p class="card-text ">FB Area, Karachi</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item text-center">From $700</li>
    <li class="feat-desc">Some quick example text to build on the card title and make up the bulk of the card's content.</li>
  </ul>
  
</div>
        </div>
        <div className="col-md-4">
        <div className="feat-box">
        <img className="card-img-top" src={FeatCard2} alt="Card image cap" />
        <div className="card-body text-center">
          <span className='upper-text'>Wedding Photography</span>
          <h5 className="card-title ">Studio 146</h5>
          <p className="card-text ">Gulshan-e-Iqbal, Karachi</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">From $580</li>
          <li className="feat-desc">Some quick example text to build on the card title and make up the bulk of the card's content.</li>
        </ul>
        
      </div>
        </div>
        <div className="col-md-4"> 
        <div className="feat-box">
        <img className="card-img-top" src={FeatCard3} alt="Card image cap" />
        <div className="card-body text-center">
            <span className='upper-text '>Banquet Halls</span>
          <h5 className="card-title ">The White Hall</h5>
          <p className="card-text ">Khaban-e-Ithad, Clifton</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">From $690</li>
          <li className="feat-desc">Some quick example text to build on the card title and make up the bulk of the card's content.</li>
        </ul>
        
      </div></div>

    </div>
</div>
    </div>


  );
};

export default Feature;
