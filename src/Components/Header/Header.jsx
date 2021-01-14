import React from "react";
import "../Header/Header.css";
import TopBar from "../TopBar/TopBar";
import Menus from "../Menus/Menus";


const Header = () => {
  return (
    <div>
      <TopBar />
      <Menus />
    </div>
  );
};

export default Header;
