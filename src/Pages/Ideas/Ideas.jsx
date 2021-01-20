import React from "react";
import "../Ideas/Ideas.css";
import ListBar from "../../Components/ListBar/ListBar";
import Heading from '../../Components/Heading/Heading'

const Ideas = () => {
  return (
    <div>
      <hr />
      <ListBar name="Wedding Ideas" />
      <hr />
      <div className='container'>
      <Heading title='Wedding Ideas' description='Planning a wedding is more complex than it used to be! We want to inspire you with great ideas for a perfect wedding day. Take a look around the site and see everything we offer.' line = {false}/>  
      </div>
      
    </div>
  );
};

export default Ideas;
