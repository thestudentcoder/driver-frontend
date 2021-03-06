import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Drivers from './Drivers/Drivers';
import Violations from './Violations/Violations';
import Search from './Search/Search';
import LandingPage from './LandingPage/LandingPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/search" component={Search} />
        <Route path="/drivers" component={Drivers} />
        <Route path="/violations" component={Violations} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
