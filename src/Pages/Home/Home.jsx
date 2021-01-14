import React from "react";
import "./Home.css";
import Banner from "../../Components/Banner/Banner";
import IconBar from "../../Components/IconBar/IconBar";
import Feature from "../../Components/Featured/Feature";
import Realwedd from "../../Components/Real/Realwedd";
import Ideas from "../../Components/Ideas/Ideas";
import Community from "../../Components/Community/Community";
import Destination from "../../Components/Destination/Destination";
import Category from "../../Components/Category/Category";
import Expert from "../../Components/Expert/Expert";

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
        <IconBar />
        <Feature />
        <Realwedd />
        <Ideas />
        <Community />
        <Destination />
        <Category />
        <Expert />
      </div>
    </div>
  );
};

export default Home;
