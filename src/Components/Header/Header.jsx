import React from "react";
import "../Header/Header.css";
import TopBar from "../TopBar/TopBar";
import Menus from "../Menus/Menus";
import { connect } from 'react-redux';


const Header = () => {
  console.log('props=>', props);

  return (
    <div>
      <TopBar />
      <Menus />
    </div>
  );
};

const mapStateToProps = (state) => ({
  name:'Nouman'
})


export default connect(mapStateToProps, null) (Header);
