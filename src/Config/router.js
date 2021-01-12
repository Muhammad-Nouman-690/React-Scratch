import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Listing from  "../Pages/List/Listing"; 
import Section from '../Components/Section/Section';
import Detail from '../Pages/DetailsList/Detail';


const AppRouter = () => {
    return (
    <Router>
      <div>      
        <Switch>
          <Route path='/Detail/:id' exact  > <Detail/> </Route>
          <Route path='/Listing/:id/' exact> <Listing /> </Route>
          <Route path='/' exact> <Section /> </Route>               
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;