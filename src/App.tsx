import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '@pages/LandingPage';
import AppTemplate from '@templates/AppTemplate';
import LoginPage from '@pages/LoginPage';

function App() {
  return (
    <AppTemplate>
      <BrowserRouter>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginPage} exact />
      </BrowserRouter>
    </AppTemplate>
  );
}

export default App;
