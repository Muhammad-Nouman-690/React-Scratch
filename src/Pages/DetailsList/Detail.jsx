import React, { useState } from "react";
import VendorMessage from "../../Components/VendorMessage/VendorMessage";
import { useParams } from "react-router-dom";

import Search from "../../Components/Search/Search";

const Detail = (prop) => {
  const { id } = useParams();

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-9">
          <h1>{id}</h1>
          <div className="alert container">
            <h1 className="alert-heading">BOOK YOUR WEDDING</h1>
            <p className="cu_info">
              Cupid Wedding Planners & Events, we provide stress free planing.
            </p>
            <hr />
            <Search />
            <hr />

            <h1>Information about Cupid- The Wedding Planner </h1>
            <p className="cu_info">
              The Cupid is a wedding planning based in the city of Karachi and
              offers bespoke wedding plans for all your related events and
              functions. There is a requirement for a wedding organiser for all
              your wedding and related occasions and if you are somebody who is
              getting married and looking for a service that offers you tonnes
              of services for all your wedding functions. Situated in Karachi,
              The Cupid is your decision for every one of these requirements.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <VendorMessage />
        </div>
      </div>
    </section>
  );
};

export default Detail;
