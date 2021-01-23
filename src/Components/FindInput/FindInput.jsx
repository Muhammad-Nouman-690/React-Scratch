import React, { useEffect, useState } from "react";
import "../FindInput/FindInput.css";

const cupid = [
  "wedding venues",
  "wedding vendors",
  "brides",
  "grooms",
  "planning",
];

const FindInput = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const results = cupid.filter((planner) =>
    planner.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
  }, [search]);

  console.log("=>", searchResults);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <form  action={search}>
              <div className="form-row">
                <div className="col m-0 p-0">
                  <input
                    type="text"
                    className="form-control  no-border"
                    placeholder="Search For"
                    value={search}
                    onChange={handleChange}
                  />
                </div>
                <div className="col m-0 p-0">
                  <input
                    type="text"
                    className="form-control  no-border "
                    placeholder="Where"
                  />
                </div>
                <button type="submit" className="btn icon-btn btn-lg m-0">
                  Find
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindInput;
