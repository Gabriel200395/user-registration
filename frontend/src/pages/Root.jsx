import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StoreProvider from "../Store/Provider";
import RoutesPrivate from "../Routes/Private/Private";
import Home from "./Home/Home";
import Login from "./Login/Login";
import RegisterUser from "./RegisterUser/RegisterUser";
import EditUser from "./EditUser/EditUser";
import UserProfile from "./UserProfile/UserProfile";

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <RoutesPrivate path="/cadastrar-usuario" component={RegisterUser} />
        <RoutesPrivate path="/usuarios" component={Home} />
        <RoutesPrivate path="/editar-usuario/:id" component={EditUser} /> 
        <RoutesPrivate path="/perfil-do-usuario/:id" component={UserProfile} />
      </Switch>
    </StoreProvider>
  </Router>
);

export default PagesRoot;
