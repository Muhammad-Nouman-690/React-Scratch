import React from "react";
import "../Card/Card.css";
import FeatCard1 from "../../assets/card1.jpg";

const Card = (props) => {
  return (
            <div class="card ">
              <img
                class="card-img-top"
                src={props.media[0].image_url}
                alt="Card image cap"
              />
              <div class="card-body shadow  ">
                <span></span>
                <h5 class="card-title">{props.vendor_name}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <ul class="list-group list-group-flush shadow">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
              </ul>
            </div>     
      
    
  );
};

export default Card;
