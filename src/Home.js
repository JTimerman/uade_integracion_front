import React from "react";
import authService from "./authService";
import { ROLES_NAVBAR_ITEMS } from "./config";
import { Redirect } from "react-router-dom";

const currentUser = {
  name: "Nombre",
  rolId: "ADMIN",
  rolDescription: "description"
};

const Home = () => {
  return <Redirect to={ROLES_NAVBAR_ITEMS[currentUser.rolId][0].path} />;
};

export default Home;
