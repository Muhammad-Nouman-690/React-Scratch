import React from "react";
import "../Button/Button.css";

const Button = ({ text, button = false }) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-lg icon-btn"
        style={button === true ? { display: "btn" } : { display: "none" }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
