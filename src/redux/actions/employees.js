import {
  getEmployees as getEmployeesService,
  createEmployee as createEmployeeService
} from "../../services/employees";

import { SET_EMPLOYEES } from "./actionTypes.json";

function setEmployees(employees) {
  return { type: SET_EMPLOYEES, employees };
}

export const getEmployees = () => {
  return dispatch => {
    return getEmployeesService()
      .then(employees => {
        dispatch(setEmployees(employees));
      })
      .catch(() => Promise.reject(false));
  };
};

export const createEmployee = employee => {
  return () => {
    return createEmployeeService(employee).catch(error =>
      Promise.reject(error)
    );
  };
};
