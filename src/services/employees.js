import fetchAPI from "../api/fetchAPI";
import { BASE_URL, EMPLOYEES } from "../constants/endpoints.json";

export const getEmployees = () => {
  return fetchAPI(BASE_URL + EMPLOYEES, "GET");
};

export const getEmployeeById = id => {
  return fetchAPI(BASE_URL + EMPLOYEES + "/" + id, "GET");
};

export const deleteEmployee = id => {
  return fetchAPI(BASE_URL + EMPLOYEES + "/" + id, "DELETE");
};

export const updateEmployee = (id, newEmployee) => {
  const sentEmployee = {
    ...newEmployee,
    last_name: newEmployee.lastName
  };
  return fetchAPI(BASE_URL + EMPLOYEES + "/" + id, "PUT", sentEmployee);
};

export const createEmployee = employee => {
  return fetchAPI(BASE_URL + EMPLOYEES, "POST", employee);
};
