import {
  getEmployees as getEmployeesService,
  createEmployee as createEmployeeService,
  updateEmployee as updateEmployeeService,
  deleteEmployee as deleteEmployeeService
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

export const updateEmployee = (id, newEmployee) => {
  return () => {
    return updateEmployeeService(id, newEmployee).catch(error =>
      Promise.reject(error)
    );
  };
};

export const deleteEmployee = id => {
  return () => {
    return deleteEmployeeService(id).catch(error => Promise.reject(error));
  };
};
