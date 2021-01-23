import React, { useEffect, useState } from "react";
import "../Planning/Planning.css";
import Heading from "../../Components/Heading/Heading";
import { getPlanning } from "../../Server/Server";
import PlanBanner from "../../Components/PlanBanner/PlanBanner";
import WireApp from "../../Components/WireApp/WireApp";

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
    setPlanning(getPlanningTools(6));
  }, []);

  return (
    <div>
      <PlanBanner
       
        title="Planning your wedding just got easier"
        para="WeddingWire has everything you need to walk down 
      the aisle with our free suite of online wedding planning tools."
        btnText="Start planning your wedding"
      />
      <Heading
        title="Tools that make wedding planning simple"
        description="Create your free WeddingWire account to start planning."
        line={false}
      />

      <div className="container">
        <div className="row">
          {planning.map((item) => (
            <div key={item.id} className="col-md-4">
              {item.icon}
              <p className="check-title">{item.icon_title}</p>
              <p className="check-para">{item.icon_desc}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <WireApp />
      <PlanBanner
     
      title="Start planning your wedding"
        para="WEDDING PLANNING HAS NEVER BEEN EASIER."
        btnText="Sign up"
      />
    </div>
  );
};

export default Planning;
