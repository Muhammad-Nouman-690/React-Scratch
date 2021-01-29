import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from  "../Pages/Home/Home";
import Planning from '../Pages/Planning/Planning';
import Venues from '../Pages/Venues/Venues';
import Vendors from '../Pages/Vendors/Vendors';
import Brides from '../Pages/Brides/Brides';
import Grooms from '../Pages/Grooms/Grooms';
import Ideas from '../Pages/Ideas/Ideas';


const AppRouter = () => {
    return (    
        <Switch>         
          <Route path='/ideas' > <Ideas/> </Route>
          <Route path='/grooms' > <Grooms/> </Route>
          <Route path='/brides' > <Brides/> </Route>
          <Route path='/vendors' > <Vendors/> </Route>
          <Route path='/venues' > <Venues/> </Route>
          <Route path='/planning' > <Planning/> </Route>               
          <Route path='/' > <Home/> </Route>    
        </Switch>   
  );
}

export default AppRouter;