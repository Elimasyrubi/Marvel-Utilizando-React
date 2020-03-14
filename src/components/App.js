import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './styles/App.scss';
import Home from '../pages/Home'
import Details from '../pages/Details'
import Layout from './Layout'

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/list/:badgeId/" component={Details}/>
      </Switch>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
