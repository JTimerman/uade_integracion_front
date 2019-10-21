import React from "react";
import { Route, Redirect } from "react-router-dom";

import roles from "../../constants/roles.json";
import { ROLES_NAVBAR_ITEMS } from "../../config";
import Layout from "../Layout";

export const PrivateRoute = ({
  component: Component,
  children,
  role,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (!role) {
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
        roles[role] &&
        !ROLES_NAVBAR_ITEMS[role].find(
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
