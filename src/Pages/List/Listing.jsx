import React from "react";
import "../List/Listing.css";
import Baraat from "../../assets/Baraat.jpg";
import { Link, useParams } from "react-router-dom";

const Listing = () => {
  const { id } = useParams();

  return (
    <div className="container list_img">
      <div className="row">
        <div className="card">
          <img className="card-img-top" src={Baraat} alt="" />
          <div className="card-body">
            <h5 className="card-title"> {`Wedding ${id.toUpperCase()}`} </h5>
            <p className="cu_info">
              A successful marriage requires falling in love many times, always
              with the same person.
            </p>

            <Link type="submit" class="btn" to="/Detail/Baraat">
              More Details
            </Link>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src={Baraat} alt="" />
          <div className="card-body">
            <h5 className="card-title">VALIMA EVENT</h5>
            <p className="cu_info">
              A great marriage is not when the <i> perfect couple </i> comes
              together. ..
            </p>

            <Link type="submit" className="btn" to="/Detail/Valima">
              More Details
            </Link>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src={Baraat} alt="" />
          <div className="card-body">
            <h5 className="card-title">MEHNDI EVENT</h5>
            <p className="cu_info">
              Never marry the one you can live with, marry the one you cannot
              live without.
            </p>

            <Link type="submit" className="btn" to="/Detail/Mehndi">
              More Details
            </Link>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src={Baraat} alt="" />
          <div className="card-body">
            <h5 className="card-title">MAYOUN EVENT</h5>
            <p className="cu_info">
              Never marry the one you can live with, marry the one you cannot
              live without.
            </p>

            <Link type="submit" className="btn" to="/Detail/Mehndi">
              More Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
