import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

import { ROLES_NAVBAR_ITEMS } from "../../constants/navbarActions";
import { CURRENT_USER_KEY } from "../../redux/actions/authentification";
import { generateAuthClient } from "../../api/fetchAPI.js";
import Layout from "../Layout";

export const PrivateRoute = ({
  component: Component,
  children,
  roles,
  setPersonalData,
  setRoles,
  ...rest
}) => {
  const [loading, setLoading] = useState(!roles.length);

  useEffect(() => {
    if (!roles.length) {
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
        if (!roles.length) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }

        if (
          props.location.pathname !== "/" &&
          !ROLES_NAVBAR_ITEMS[roles[0]].find(
            ({ path }) => path === props.location.pathname
          )
        ) {
          return <Redirect to={{ pathname: "/" }} />;
        }
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};
