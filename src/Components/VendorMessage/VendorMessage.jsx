import React, { useState } from "react";

const VendorMessage = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="border container shadow p-4 mb-4 bg-light">
      <div className="row">
        <form>
          <h4 className="text-center">Message Vendor</h4>
          <div className="col-md-6">
            <label>
              Full Name
              <input
                type="text"
                placeholder="Name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </label>
          </div>
          <div className="col-md-6">
            <label>
              Email
              <input
                type="email"
                placeholder="Email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
          </div>
          <div className="col-md-6">
            <label>
              Number
              <input
                type="number"
                placeholder="Number"
                id="number"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
              />
            </label>
          </div>
          <div className="col-md-6">
            <label>
              Wedding Date
              <input
                type="date"
                id="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </label>
          </div>
          <div className="col-md-6">
            <label>
              Comment
              <input
                type="text"
                placeholder="Comment"
                id="comment"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              />
            </label>
          </div>
          <div className="col-md-12">
            <button type="button" className="btn btn-secondary ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorMessage;