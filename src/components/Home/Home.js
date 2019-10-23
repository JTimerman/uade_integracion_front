import React from "react";
import { ROLES_NAVBAR_ITEMS } from "../../constants/navbarActions";
import { Redirect } from "react-router-dom";

const Home = ({ roles }) => {
  return (
    <div>
      <img
        src="./images/wellcome2.gif"
        alt="Smiley face"
        height="600"
        width="1150"
      ></img>
    </div>
  );
};

export default Home;
