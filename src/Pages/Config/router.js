import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Listing from '../List/Listing';
import Section from '../../Components/Section/Section';
import Detail from '../DetailsList/Detail';
import Valima from '../DetailsList/Valima/Valima';
import Mehndi from '../DetailsList/Mehndi/Mehndi';
import Baraat from '../../Pages/DetailsList/Baraat/Baraat'

const AppRouter = () => {
    return (
    <Router>
      <div>      
        <Switch>
          <Route path='/Detail' > <Detail /> </Route>
          <Route path='/Mehndi'> <Mehndi /> </Route>
          <Route path='/Valima'> <Valima /> </Route>
          <Route path='/Baraat' > <Baraat /> </Route>
          <Route path='/Listing'> <Listing /> </Route>
          <Route path='/'> <Section /> </Route>               
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;