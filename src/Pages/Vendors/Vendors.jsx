import React from "react";
import "../Vendors/Vendors.css";
import ListBar from "../../Components/ListBar/ListBar";
import WeddingList from "../../Components/WeddingList/WeddingList";
import PlanBanner from "../../Components/PlanBanner/PlanBanner";
import SearchWedding from "../../Components/SearchWedding/SearchWedding";


const Vendors = () => {
  return (
    <div>
      <hr />

      <ListBar name="Wedding vendors" />
      <PlanBanner
        title="Wedding Vendors"
        para="Wedding Vendors: Check prices, request quotes and check availability for all types of wedding venues including banquet halls, hotels, palaces, farmhouses, tent houses and marriage halls."
        btnText="Vendors"
      />
      <hr />
      <SearchWedding name = 'Wedding vendors' />     
      <hr />
      <WeddingList />
      <hr />
    </div>
  );
};

export default Vendors;
