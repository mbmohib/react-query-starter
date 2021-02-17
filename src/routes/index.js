import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { Login, Users, User } from "../screens";
import { useAuth } from "../services/useAuth";

const PrivateRoute = ({ component: Component, isAuth, ...props }) => {
  return (
    <Route
      {...props}
      render={innerProps =>
        isAuth ? <Component {...innerProps} /> : <Redirect to="/login" />
      }
    />
  );
};

export default function Routes() {
  const auth = useAuth();
  const isAuth = auth.isAuth;

  console.log("auth | Routes :>> ", auth);

  return (
    <Switch>
      <Route path="/login" component={Login} exact />
      <Route exact path="/">
        {isAuth ? <Redirect to="/users" /> : <Redirect to="/login" />}
      </Route>
      <Route path="/users" component={Users} exact isAuth={isAuth} />
      <PrivateRoute path="/users/:id" component={User} exact isAuth={isAuth} />
    </Switch>
  );
}
