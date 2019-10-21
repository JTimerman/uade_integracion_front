import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Test from "./Test";
import { PrivateRoute } from "./PrivateRoute";
import Logout from "./Logout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Test} />
        <Route exact path="/logout" component={Logout} />
        <PrivateRoute exact path="/" component={Home} />>
        <PrivateRoute path="/register" component={Test} />
        <PrivateRoute path="/associate-student" component={Test} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
