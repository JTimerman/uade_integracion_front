import React from "react";
import { ROLES_NAVBAR_ITEMS } from "../../config";
import { Redirect } from "react-router-dom";

const Home = ({ role }) => {
  return <Redirect to={ROLES_NAVBAR_ITEMS[role][0].path} />;
};

export default Home;
