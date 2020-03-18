import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './styles/App.scss';
import Home from '../pages/Home'
import Details from '../pages/Details'



function App() {
  return (
    <BrowserRouter>
 
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/details/:badgeId/" component={Details}/>

        </Switch>

    </BrowserRouter>
  );
}

export default App;
