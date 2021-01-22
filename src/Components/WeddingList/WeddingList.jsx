import React, { useEffect, useState } from 'react';
import '../WeddingList/WeddingList.css'
import Button from '../../Components/Button/Button'
import { getVenue } from '../../Server/Server';


const WeddingList = () => {
  
    const [venue, setVenue] = useState([]);

  function getListVenue(num) {
    const venue = getVenue();

    
    return venue.filter((item, index) => {
      if (num > index) {
        return item;
      }
    });
  }

  useEffect(() => {
    setVenue(getListVenue(5));
  }, []);


    return(
        <div>
                 <div className="container">
      {venue.map((item) => (
 
        <div key={item.id} className="row p-2">         
          <div className="col-md-3">
            <img src={item.venue_img} alt="" />
          </div>          
         <div className="col-md-9">
            <h5 className="venue-title">{item.venue_title}</h5>
            <p className="venue-para ">
              {item.venue_desc}
            </p>
            <div className='venue-list'>
              <div className='venue-item'>
                Price Per Plate <br/>
               <strong> {item.venue_price} </strong>
              
              </div>
              <div className='venue-item'>
                Guests <br/>
                <strong> {item.venue_guest} </strong>
              </div>
              <div className='venue-item'>
                Deals <br/>
               <strong> 1 </strong>
              </div>
              <Button className='venue-btn' button text= 'Request pricing' />
            </div>
          </div>
        </div>

))}

      </div>
        </div>
    );
}

export default WeddingList;