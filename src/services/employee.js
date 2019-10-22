import { AuthClient } from "../api/fetchAPI";

const getAll = () =>
  AuthClient.get("/employees").then(response => response.data);

const EmployeeService = { getAll };

export default EmployeeService;
