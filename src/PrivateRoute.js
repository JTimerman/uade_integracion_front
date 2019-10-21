import React from "react";
import { Route, Redirect } from "react-router-dom";

import authService from "./authService";
import { ROLES, ROLES_NAVBAR_ITEMS } from "./config";
import Layout from "./components/Layout";

export const PrivateRoute = ({
  component: Component,
  children,
  roles,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      const currentUser = authService.getCurrentUser();
      if (!currentUser) {
        // not logged in so redirect to login page with the return url
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }

      // check if route is restricted by role
      if (
        props.location.pathname !== "/" &&
        ROLES[currentUser.rolId] &&
        !ROLES_NAVBAR_ITEMS[currentUser.rolId].find(
          ({ path }) => path === props.location.pathname
        )
      ) {
        // role not authorised so redirect to home page
        return <Redirect to={{ pathname: "/" }} />;
      }
      // authorised so return component
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);
