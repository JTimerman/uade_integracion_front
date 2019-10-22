import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Logout from "./components/Logout";
import Register from "./components/Register";

import store from "./redux/store";
import EmployeeData from "./components/EmployeeData/EmployeeData";
import StudentData from "./components/StudentData/StudentData";
window.store = store;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={SignIn} />
          <Route exact path="/logout" component={Logout} />
          <PrivateRoute exact path="/" component={Home} />>
          <PrivateRoute path="/homeADMIN" component={Home} />
          <PrivateRoute path="/registerStudent" component={Register} />
          <PrivateRoute path="/registerHolder" component={Register} />
          <PrivateRoute path="/registerEmployee" component={Register} />
          <PrivateRoute path="/employee-data" component={EmployeeData} />
          <PrivateRoute path="/student-data" component={StudentData} />
          <PrivateRoute component={Home} />>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
