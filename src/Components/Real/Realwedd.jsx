import React from "react";
import "./Realwedd.css";
import Fimg from '../../assets/card1.jpg'
import Simg from '../../assets/card2.jpg'
import Timg from '../../assets/card3.jpg'


const Realwedd = () => {
  return (
    <div>
      <h1 className="Real-wedd p-4">Real weddings</h1>
      <p className='Sec-Real text-center'>
        Browse by location to find wedding professionals in your area and view
        photos of their work
      </p>
<span className='text-seap '></span>
    <div className="container">
      <div className="row">
        <div className="col-md-3"><img src={Fimg} alt="..." class="img-thumbnail" /></div>
        <div className="col-md-3"><img src={Simg} alt="..." class="img-thumbnail" /></div>
        <div className="col-md-3"><img src={Timg} alt="..." class="img-thumbnail" /></div>
        <div className="col-md-3"><img src={Fimg} alt="..." class="img-thumbnail" /></div>
      </div>
    </div>
    </div>
  );
};

export default Realwedd;
