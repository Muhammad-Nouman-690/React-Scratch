import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";

//import AppRouter from './Config/router'

const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        <Home />
      </section>
      <footer></footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
