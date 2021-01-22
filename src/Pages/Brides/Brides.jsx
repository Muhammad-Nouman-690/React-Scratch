import React from "react";
import "../Brides/Brides.css";
import ListBar from "../../Components/ListBar/ListBar";
import PlanBanner from "../../Components/PlanBanner/PlanBanner";
import SearchWedding from "../../Components/SearchWedding/SearchWedding";
import WeddingList from "../../Components/WeddingList/WeddingList";

const Brides = () => {
  return (
    <div>
      <hr />
      <ListBar name="Brides" />
      <PlanBanner
        title="Brides"
        para="Brides: Check prices, request quotes and check availability for all types of wedding venues including banquet halls, hotels, palaces, farmhouses, tent houses and marriage halls."
        btnText="Brides"
      />
      <hr />
      <SearchWedding name="Brides" />
      <hr />

      <WeddingList />
      <hr />
    </div>
  );
};

export default Brides;
