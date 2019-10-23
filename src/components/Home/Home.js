import React from "react";
import { ROLES_NAVBAR_ITEMS } from "../../constants/navbarActions";
import { Redirect } from "react-router-dom";

const Home = ({ roles }) => {
  return <Redirect to={ROLES_NAVBAR_ITEMS[roles[0]][0].path} />;
};

export default Home;
