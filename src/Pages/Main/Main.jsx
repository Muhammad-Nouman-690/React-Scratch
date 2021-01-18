import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import AppRouter from "../../Config/router";

const Main = (props) => {
  console.log(props);
  return (
    <div>
      <header>
        <Header />
      </header>

      <div className="main">
        <AppRouter />
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
