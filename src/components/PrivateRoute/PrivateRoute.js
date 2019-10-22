import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

import { ROLES_NAVBAR_ITEMS } from "../../constants/navbarActions";
import Layout from "../Layout";
import { CURRENT_USER_KEY } from "../../redux/actions/authentification";
import { generateAuthClient } from "../../api/fetchAPI.js";

export const PrivateRoute = ({
  component: Component,
  children,
  roles,
  setPersonalData,
  setRoles,
  ...rest
}) => {
  const [loading, setLoading] = useState(!roles);
  useEffect(() => {
    if (!roles) {
      const user = JSON.parse(window.localStorage.getItem(CURRENT_USER_KEY));
      if (!user) {
        setLoading(false);
        return;
      }
      generateAuthClient(user.token);
      const { roles, ...personalData } = user;
      setPersonalData(personalData);
      setRoles(roles);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return "cargando...";
  return (
    <Route
      {...rest}
      render={props => {
        if (!roles) {
          // not logged in so redirect to login page with the return url
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }

        // check if route is restricted by role
        if (
          roles === undefined ||
          roles.length === 0 ||
          (props.location.pathname !== "/" &&
            !ROLES_NAVBAR_ITEMS[roles[0]].find(
              ({ path }) => path === props.location.pathname
            ))
        ) {
          // role not authorised so redirect to login page
          return <Redirect to={{ pathname: "/login" }} />;
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
};
