import React from "react";
import "../Heading/Heading.css";

const Heading = ({ title, description, line = true }) => {
  return (
    <div>
      <h1 className="Real-wedd p-4">{title}</h1>
      <p className="Sec-Real text-center">{description}</p>
      <span
        className="text-seap"
        style={line === false ? { display: "none" } : { display: "block" }}
      ></span>
    </div>
  );
};

export default Heading;
