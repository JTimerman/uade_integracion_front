import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Logout from "./components/Logout";
import Register from "./components/Register";
import EmployeeData from "./components/EmployeeData";
import Payments from "./components/Payments";
import StudentData from "./components/StudentData";
import HomeHolder from "./components/HomeHolder";
import PayAmount from "./components/PayAmount";

import store from "./redux/store";

import "react-toastify/dist/ReactToastify.css";

window.store = store;

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={SignIn} />
          <Route exact path="/logout" component={Logout} />
          <PrivateRoute exact path="/" component={Home} />>
          <PrivateRoute path="/homeADMIN" component={Home} />
          <PrivateRoute path="/HomeHolder" component={HomeHolder} />
          <PrivateRoute path="/PayAmount" component={PayAmount} />
          <PrivateRoute path="/Payments" component={Payments} />
          <PrivateRoute path="/registerStudent" component={Register} />
          <PrivateRoute path="/registerHolder" component={Register} />
          <PrivateRoute path="/registerEmployee" component={Register} />
          <PrivateRoute path="/employee-data" component={EmployeeData} />
          <PrivateRoute path="/student-data" component={StudentData} />
          <PrivateRoute component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
