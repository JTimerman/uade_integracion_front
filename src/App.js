import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Absenteeism from "./components/Absenteeism";
import EmployeeData from "./components/EmployeeData";
import Home from "./components/Home";
import HomeHolder from "./components/HomeHolder";
import Logout from "./components/Logout";
import PayAmount from "./components/PayAmount";
import Payments from "./components/Payments";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import StudentData from "./components/StudentData";

import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={SignIn} />
          <Route exact path="/logout" component={Logout} />
          <PrivateRoute exact path="/" component={Home} />>
          <PrivateRoute path="/absenteeism" component={Absenteeism} />
          <PrivateRoute path="/employeePersonalData" component={EmployeeData} />
          <PrivateRoute path="/homeAdmin" component={Home} />
          <PrivateRoute path="/homeHolder" component={HomeHolder} />
          <PrivateRoute path="/payAmount" component={PayAmount} />
          <PrivateRoute path="/payments" component={Payments} />
          <PrivateRoute path="/registerEmployee" component={Register} />
          <PrivateRoute path="/registerHolder" component={Register} />
          <PrivateRoute path="/registerStudent" component={Register} />
          <PrivateRoute path="/studentPersonalData" component={StudentData} />
          <PrivateRoute component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
