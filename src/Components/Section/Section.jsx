import React from "react";
import "../Section/Section.css";
import { Link } from "react-router-dom";
import CardOne from '../../assets/Baraat.jpg'
import CardTwo from '../../assets/valima.jpg';
import Detail from '../../Pages/DetailsList/Detail'


const Section = () => {
  return (
    <div>
      <div className="alert container">
        <h1 className="display-4">The Cupid</h1>
        <p className="lead">
          Mohid Heights, RTO Lane, 4 Bunglows, Andheri West 400053 7 Bungalows,
          Andheri West (Karachi)
        </p>

        <p className="lead">
          <button
            type="button"
            className="btn btn-secondary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Request Pricing
          </button>
        </p>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Get Quote from The Cupid
              </h5>
            
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="alert container ">
        <Detail />
      </div>

      <hr />
      <div className="alert  container">
        <h1 className="card_title">Other couples have also viewed</h1>
        <div className="card-group ">
          <div className="card">
            <img className="card-img-top" src={CardOne} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Roosa Event</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={CardOne} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Humsafar Wedding</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={CardOne} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">The Wedding Times</h5>
              <p className="card-text">
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
