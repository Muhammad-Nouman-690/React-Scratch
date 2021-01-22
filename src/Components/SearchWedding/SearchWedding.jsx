import React from "react";
import "../../Components/SearchWedding/SearchWedding.css";

const SearchWedding = ({name}) => {
  return (
    <div className="container ">
      Your search: <button className="search-btn">{name}</button>
    </div>
  );
};

export default SearchWedding;
