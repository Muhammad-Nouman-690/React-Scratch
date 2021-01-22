import React from "react";
import "../Grooms/Grooms.css";
import ListBar from "../../Components/ListBar/ListBar";
import PlanBanner from "../../Components/PlanBanner/PlanBanner";
import SearchWedding from "../../Components/SearchWedding/SearchWedding";
import WeddingList from "../../Components/WeddingList/WeddingList";

const Grooms = () => {
  return (
    <div>
      <hr />
      <ListBar name="Grooms" />
      <PlanBanner
        title="Grooms"
        para="Grooms: Check prices, request quotes and check availability for all types of wedding venues including banquet halls, hotels, palaces, farmhouses, tent houses and marriage halls."
        btnText="Grooms"
      />
      <hr />
      <SearchWedding name="Grooms" />
      <hr />

      <WeddingList />
      <hr />
    </div>
  );
};

export default Grooms;
