import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ChromeWrapper from './Chrome/ChromeWrapper';
import Home from './Home';
import NbaHome from './Nba/NbaHome';
import MlbHome from './Mlb/MlbHome';

const App = () => {
  return (
    <BrowserRouter>
      <ChromeWrapper>
        <Switch>
          <Route path="/nba" component={NbaHome} />
          <Route path="/mlb" component={MlbHome} />
          <Route exact path="/" component={Home} />
        </Switch>
      </ChromeWrapper>
    </BrowserRouter>
  );
};

export default App;
