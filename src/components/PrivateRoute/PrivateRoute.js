import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

import roles from "../../constants/roles.json";
import { ROLES_NAVBAR_ITEMS } from "../../constants/navbarActions";
import Layout from "../Layout";
import { CURRENT_USER_KEY } from "../../redux/actions/authentification";
import { generateAuthClient } from "../../api/fetchAPI.js";

export const PrivateRoute = ({
  component: Component,
  children,
  role,
  setPersonalData,
  setRole,
  ...rest
}) => {
  const [loading, setLoading] = useState(!role);
  console.log("PrivateRoute: ", role);
  useEffect(() => {
    if (!role) {
      const user = JSON.parse(window.localStorage.getItem(CURRENT_USER_KEY));
      if (!user) {
        setLoading(false);
        return;
      }
      generateAuthClient(user.token);
      const { role, ...personalData } = user;
      setPersonalData(personalData);
      setRole(role);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("loading: ", loading);
  if (loading) return "cargando...";
  return (
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
};
