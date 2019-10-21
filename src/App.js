import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Home from "./Home";
import Test from "./Test";
import { PrivateRoute } from "./PrivateRoute";
import SignIn from "./components/SignIn/signIn";
import Logout from "./Logout";
import store from "./redux/store";
import Register from "./components/Register/Register";
window.store = store;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={SignIn} />
          <Route exact path="/logout" component={Logout} />
          <PrivateRoute exact path="/" component={Home} />>
          <PrivateRoute path="/homeADMIN" component={Test} />
          <PrivateRoute path="/registerStudent" component={Register} />
          <PrivateRoute path="/registerHolder" component={Register} />
          <PrivateRoute path="/registerEmployee" component={Register} />
          <PrivateRoute path="/associate-student" component={Test} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
