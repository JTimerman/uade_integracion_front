import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./components/SignIn";
import Home from "./components/Home";

import Test from "./Test";
import Logout from "./Logout";
import store from "./redux/store";
import "./App.css";

window.store = store;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={SignIn} />
          <Route exact path="/logout" component={Logout} />
          <PrivateRoute exact path="/" component={Home} />>
          <PrivateRoute path="/register" component={Test} />
          <PrivateRoute path="/associate-student" component={Test} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
