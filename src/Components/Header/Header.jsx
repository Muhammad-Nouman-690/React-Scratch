import React from "react";
import "../Header/Header.css";
import TopBar from "../TopBar/TopBar";
import Menus from "../Menus/Menus";
import { connect } from "react-redux";
import { set_data, addData } from "../../store/action";
import { useHistory } from "react-router-dom";

const Header = (props) => {

  let history = useHistory();
  function set_data() {
    history.push("/brides");
  }


console.log('props =>',props)
  return (
    <div>
      <TopBar />
      <Menus />
      <button onClick={() => set_data("tohhhhh")}>Click</button>
      <button onClick={() => addData("tohhhhhwwww")}>Click</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.userName,
  userEmail: state.auth.email,
  appName: state.app.chatName
});

const mapDispatchToProps = (dispatch) => ({
  set_data: (data) => dispatch(set_data(data)),
  addData: (foo) =>  dispatch(addData(foo)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
