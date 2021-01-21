import React from "react";
import "../Ideas/Ideas.css";
import ListBar from "../../Components/ListBar/ListBar";
import Heading from '../../Components/Heading/Heading'
import { BsSearch } from "react-icons/bs";
import IdeaCard from '../../Components/IdeaCard/IdeaCard';

const Ideas = () => {
  return (
    <div>
      <hr />
      <ListBar name="Wedding Ideas" />
      <hr />
      <div className='container'>
      <Heading title='Wedding Ideas' description='Planning a wedding is more complex than it used to be! We want to inspire you with great ideas for a perfect wedding day. Take a look around the site and see everything we offer.' line = {false}/>  
      </div>
    
      <div className="container ">
        <div className="row">
          <div className="col">

      <div className='search '>
        <input type="text" placeholder='Search weddingWire articles' className='search-input form-control'/>
        <button type="button" className="btn icon-btn  m-0">
        <BsSearch />
            </button>
      </div>
      
      </div>
        </div>
      </div>     
    <IdeaCard />
    </div>
  );
};

export default Ideas;
