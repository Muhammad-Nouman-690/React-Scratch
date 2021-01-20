import React from "react";
import "../ListBar/ListBar.css";

const ListBar = ({name}) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list-ren">
              <li>Wedding </li>
              <span className="list-sty"> / </span>
              <li>{name}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBar;
