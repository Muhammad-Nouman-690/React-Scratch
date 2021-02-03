import React from "react";
import "../RequestPricing/Pricing.css";
import PricingLogin from "../PricingLogin/PricingLogin";

const Pricing = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="pricing_modal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Get Quote from Ankit Vista Green Village
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
            <div className="modal-body">
              <PricingLogin />
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
