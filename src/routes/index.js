import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { Login, Users, User } from "../screens";
import { Layout } from "../components";

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

export default function Routes({ isAuth }) {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route exact path="/">
            {isAuth ? <Redirect to="/users" /> : <Redirect to="/login" />}
          </Route>
          <PrivateRoute path="/users" component={Users} exact isAuth={isAuth} />
          <PrivateRoute
            path="/users/:id"
            component={User}
            exact
            isAuth={isAuth}
          />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}
