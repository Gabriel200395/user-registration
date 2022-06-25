import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from 'components/Store/Provider';
import RoutesPrivate from 'components/Routes/Private/Private';
import Home from './Home/Home';
import Login from './Login/Login'; 
import RegisterUser from "./RegisterUser/RegisterUser"

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} /> 
        <RoutesPrivate path="/cadastrar-usuario" component={RegisterUser} />
        <RoutesPrivate path="/" component={Home} />
      </Switch>
    </StoreProvider>
  </Router>
)


export default PagesRoot;
