import React from 'react';
import { Switch } from 'react-router';

import PrivateRoute from './components/PrivateRoute';
import home from './pages/home';
import SignIn from './pages/SignIn';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <Switch>
      <PublicRoute path="/signin">
        <SignIn />
      </PublicRoute>
      <PrivateRoute path="/">
        <home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
