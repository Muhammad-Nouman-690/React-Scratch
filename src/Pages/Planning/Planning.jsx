import React, { useEffect, useState } from "react";
import "../Planning/Planning.css";
import Heading from "../../Components/Heading/Heading";
import { BsCardChecklist } from "react-icons/bs";
import { getPlanning } from "../../Server/Server";
import PlanBanner from '../../Components/PlanBanner/PlanBanner'

const Planning = () => {
  const [planning, setPlanning] = useState([]);

  function getPlanningTools(num) {
    const planning = getPlanning();

    return planning.filter((item, index) => {
      if (num > index) {
        return item;
      }
    });
  }

  useEffect(() => {
    setPlanning(getPlanningTools(5));
  }, []);

  return (
    <div>
      <PlanBanner />
      <Heading
        title="Tools that make wedding planning simple"
        description="Create your free WeddingWire account to start planning."
        line={false}
      />
      
      <div className="container">
        <div className="row">
          {planning.map((item) => (
            <div key={item.id} {...item} className="col main-check">
              <BsCardChecklist  className="check-icon" />
              <p className="check-title">{item.icon_title}</p>
              <p className="check-para">{item.icon_desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planning;
