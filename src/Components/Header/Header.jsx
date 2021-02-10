import React from "react";
import "../Header/Header.css";
import TopBar from "../TopBar/TopBar";
import Menus from "../Menus/Menus";
import { connect } from "react-redux";

const Header = (props) => {
console.log(props)
  return (
    <div>
      <TopBar  />
      <Menus />
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users
});

export default connect(mapStateToProps, null)(Header);
