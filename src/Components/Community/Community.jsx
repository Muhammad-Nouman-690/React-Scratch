import React, { useEffect, useState } from "react";
import "../Community/Community.css";
import { BsChevronRight } from "react-icons/bs";
import { getCommunity } from "../../Server/Server";

const Community = () => {
  const [community, setCommunity] = useState([]);

  function getWeddCommunity(num) {
    const community = getCommunity();

    return community.filter((item, index) => {
      if (num > index) {
        return item;
      }
    });
  }

  useEffect(() => {
    setCommunity(getWeddCommunity(3));
  }, []);

  return (
    <div className="alert ">
      <div className="container">
        <div className="main-comm row">
          <div className="col">
            <h3 className="head-comm">Community</h3>
            <p className="text-comm">Today we're talking about...</p>
            <a href="#" className="next-link-art">
              VIEW ALL DISCUSSIONS <BsChevronRight className="icon-articles" />
            </a>
          </div>

          {community.map((item) => (
            <div key={item.id} className="col box-comm">
              <a href="#" className="comm-title">
                {item.comm_title}
              </a>
              <p className="comm-desc">{item.comm_desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
