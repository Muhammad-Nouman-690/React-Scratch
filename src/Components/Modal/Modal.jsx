import React from "react";
import Login from "../LoginFields/Login";

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="example_Modal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Vendor SignUp
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
            <Login Btn_name="Signup" Email other name />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
