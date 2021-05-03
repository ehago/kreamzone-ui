import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '@pages/LandingPage';
import AppTemplate from '@templates/AppTemplate';
import LoginPage from '@pages/LoginPage';
import ErrorPage from '@pages/ErrorPage';

function App() {
  return (
    <AppTemplate>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route component={ErrorPage} exact />
        </Switch>
      </BrowserRouter>
    </AppTemplate>
  );
}

export default App;
