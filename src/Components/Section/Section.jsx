import React from "react";
import "../Section/Section.css";
import { Link } from "react-router-dom";
import CardOne from '../../assets/Baraat.jpg'
import CardTwo from '../../assets/valima.jpg';
import Detail from '../../Pages/DetailsList/Detail'


const Section = () => {
  return (
    <div>
      <div class="alert container">
        <h1 class="display-4">The Cupid</h1>
        <p class="lead">
          Mohid Heights, RTO Lane, 4 Bunglows, Andheri West 400053 7 Bungalows,
          Andheri West (Karachi)
        </p>

        <p class="lead">
          <a class="btn btn-secondary btn-lg" href="#" role="button">
            Request Pricing
          </a>
        </p>
      </div>

      <hr />

      <div className="alert container ">
        <Detail />
      </div>

      <hr />
      <div className='alert  container'>
        <h1 className="card_title">Other couples have also viewed</h1>
        <div class="card-group ">
          <div class="card">
            <img className="card-img-top" src={CardOne} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Roosa Event</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={CardOne} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Humsafar Wedding</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={CardOne} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">The Wedding Times</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
