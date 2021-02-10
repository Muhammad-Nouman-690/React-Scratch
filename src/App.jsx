import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Main from "./Pages/Main/Main";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';


const App = ({ pageName = "default" }) => {
  return (
    <div className={pageName}>
      <Router>
        <Main />
      </Router>
    </div>
  );
};

ReactDOM.render(
    <Provider store={store} >
      <App />
    </Provider>, 
    document.getElementById("root")
    );
