import React from "react";
import "../Header/Header.css";
import TopBar from "../TopBar/TopBar";
import Menus from "../Menus/Menus";
import { connect } from "react-redux";
import { set_data, addData } from "../../store/action";

const Header = (props) => {
console.log('props =>',props)
  return (
    <div>
      <TopBar />
      <Menus />
      <button onClick={set_data}>Click</button>
      <button onClick={addData}>Click</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = (dispatch) => ({
  set_data: () => dispatch(set_data()),
  addData: () => dispatch(addData())  
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
