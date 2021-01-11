import React from "react";
import ReactDOM from "react-dom";
import './App.css'
import  Header  from './Components/Header/Header'
import AppRouter from './Pages/Config/router'

const App = () => {
 
  return (
    <div className="Bg-img">
      <header>
        <Header />
      </header>

      <section>
        <AppRouter />
      </section>

      <footer></footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));