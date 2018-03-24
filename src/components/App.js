import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import NbaHome from './Nba/NbaHome';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/nba" component={NbaHome} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
