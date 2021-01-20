import React from 'react';
import '../FindInput/FindInput.css'

const FindInput = () => {
    return(
        <div>
<div className="container">
    <div className="row">
        <div className="col">
        <form>
          <div className="form-row">
            <div className="col m-0 p-0">
              <input
                type="text"
                className="form-control  no-border"
                placeholder="Search For"
              />
            </div>
            <div className="col m-0 p-0">
              <input
                type="text"
                className="form-control  no-border "
                placeholder="Where"
              />
            </div>
            <button type="button" className="btn icon-btn btn-lg m-0">
              Find
            </button>
          </div>
        </form>
        </div>
    </div>
</div>
        </div>
    );
}

export default FindInput;
