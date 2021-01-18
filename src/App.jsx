import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Main from "./Pages/Main/Main";
import { BrowserRouter as Router } from "react-router-dom";
//import AppRouter from './Config/router'

const App = ({ pageName = "default" }) => {
  return (
    <div className={pageName}>
      <Router>
        <Main />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
