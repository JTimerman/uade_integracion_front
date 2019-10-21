import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Logout from "./components/Logout";

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
          <PrivateRoute exact path="/register" component={Home} />
          <PrivateRoute default path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
