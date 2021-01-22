import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route
        exact
        path={ROUTES.LINKED}
        component={() => {
          window.location.href = 'https://www.linkedin.com/in/luigi-mark-fernandez-277a53179/';
          return null;
        }}
      />
      <Route
        exact
        path={ROUTES.GITHUB}
        component={() => {
          window.location.href = 'https://github.com/luigi059';
          return null;
        }}
      />
    </Router>
  );
}
