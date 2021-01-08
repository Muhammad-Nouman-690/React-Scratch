import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Listing from './List/Listing';
import  Section from '../Components/Section/Section';

const AppRouter = () => {
    return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Listing">Listings</Link>
            </li>
           
          </ul>
        </nav> */}
        <Switch>
          <Route path="/Listing"> <Listing /> </Route>
          <Route path="/"> <Section /> </Route>     
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;