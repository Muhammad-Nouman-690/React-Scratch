import React, { useState, useEffect } from "react";
import "../Ideas/Ideas.css";
import { BsChevronRight } from "react-icons/bs";
import Heading from "../Heading/Heading";
import { getIdea } from "../../Server/Server";
import { getTip } from "../../Server/Server";

const Ideas = () => {
  // Idea API
  const [idea, setIdea] = useState([]);

  function setTipIdea(num) {
    const idea = getIdea();

    return idea.filter((item, index) => {
      if (num > index) {
        return item;
      }
    });
  }
  useEffect(() => {
    setIdea(setTipIdea(6));
  }, []);

  // Tip API
  const [tip, setTip] = useState([]);

  function setIdeaTip(num) {
    const tip = getTip();

    return tip.filter((item, index) => {
      if (num > index) {
        return item;
      }
    });
  }
  useEffect(() => {
    setTip(setIdeaTip(4));
  }, []);

  return (
    <div className="p-4">
      <Heading
        title="Ideas and tips"
        description="Get inspired with the latest trends and advice from our wedding experts"
      />
      <div className="container">
        <div className="row">
          {idea.map((item) => (
            <div key={item.id} className="col round-main">
              {" "}
              <img src={item.img_round} className="round-photo" alt="" />{" "}
              <p className="round-text">{item.text_round}</p>{" "}
            </div>
          ))}
        </div>
      </div>

      <div className="Next-main row">
        {tip.map((item) => (
          <div key={item.id} className="col-md-3">
            <img src={item.tip_img} className="round-Next" alt="" />
            <div className="text-next">
              <span className="text-next-category">{item.tip_text}</span>
              <a href="#" className="next-link">
                {item.tip_title}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a href="#" className="next-link-art">
          ALL ARTICLES <BsChevronRight className="icon-articles" />
        </a>
      </div>
    </div>
  );
};

export default Ideas;
