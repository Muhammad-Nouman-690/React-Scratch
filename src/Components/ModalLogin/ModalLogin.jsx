import React from "react";
import Login from "../LoginFields/Login";

const ModalLogin = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Vendor Log In
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
            <Login Btn_name="Login" Email fb_login />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalLogin;
