import React from "react";
import "./Realwedd.css";
import Fimg from '../../assets/card1.jpg'
import Simg from '../../assets/card2.jpg'
import Timg from '../../assets/card3.jpg'
import Heading from '../Heading/Heading'


const Realwedd = () => {
  return (
    <div>
   <Heading title="Real Wedding" description="Browse by location to find wedding professionals in your area and view photos of their work" />
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
