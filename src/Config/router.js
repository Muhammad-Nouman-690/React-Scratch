import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Listing from  "../Pages/List/Listing"; 
import Section from '../Components/Section/Section';
import Detail from '../Pages/DetailsList/Detail';
import Planning from '../Pages/Planning/Planning';
import Home from  "../Pages/Home/Home";


const AppRouter = () => {
    return (
  
    
        <Switch>
          <Route path='/planning' exact> <Planning/> </Route>               
          <Route path='/' exact> <Home/> </Route>    
        </Switch>
    
   
  );
}

export default AppRouter;