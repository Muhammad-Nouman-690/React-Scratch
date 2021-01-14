import React from "react";
import ReactDOM from "react-dom";
import './App.css'
import  HomePage  from './Pages/HomePage/Home'
//import AppRouter from './Config/router'

const App = () => {
 
  return (
    <div >
     <HomePage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));