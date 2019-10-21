import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Test = props => {
  const user = {
    name: "Pepe Itaka",
    rolId: "ADMIN",
    rolDescription: "Administrador"
  };

  const history = useHistory();
  const login = () => {
    window.localStorage.setItem("currentUser", JSON.stringify(user));
    history.push("/");
  };
  return (
    <div>
      <Button onClick={login}>Login</Button>
    </div>
  );
};

export default Test;
