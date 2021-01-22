import React from "react";
import "../Venues/Venues.css";
import PlanBanner from "../../Components/PlanBanner/PlanBanner";
import ListBar from "../../Components/ListBar/ListBar";
import WeddingList from "../../Components/WeddingList/WeddingList";
import SearchWedding from "../../Components/SearchWedding/SearchWedding";

const Venues = () => {
  return (
    <div>
      <hr />
      <ListBar name="Wedding venues" />
      <PlanBanner
        title="Wedding Venues"
        para="Wedding Venues: Check prices, request quotes and check availability for all types of wedding venues including banquet halls, hotels, palaces, farmhouses, tent houses and marriage halls."
        btnText="Venues"
      />
      <hr />
      <SearchWedding name = 'Wedding venues' />
      <hr />

      <WeddingList />
      <hr />
    </div>
  );
};

export default Venues;
