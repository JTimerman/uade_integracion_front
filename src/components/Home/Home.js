import React from "react";
import { ROLES_NAVBAR_ITEMS } from "../../constants/navbarActions";
import { Redirect } from "react-router-dom";

const Home = ({ roles }) => {
  const divStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" + "./images/wellcome2.gif" + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };

  return <div style={divStyle}></div>;
};

export default Home;
