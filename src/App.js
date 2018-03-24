import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NbaHome from './components/nba/NbaHome';

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

ReactDOM.render(<App />, document.getElementById("app"));
