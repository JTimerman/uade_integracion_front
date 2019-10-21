import { CURRENT_USER_KEY } from "./config";
import React from "react";
import { Redirect } from "react-router-dom";
const Logout = () => {
  window.localStorage.removeItem(CURRENT_USER_KEY);
  return <Redirect to="/login" />;
};

export default Logout;