import fetchAPI from "../api/fetchAPI";
import { BASE_URL, STUDENTS } from "../constants/endpoints.json";

export const getStudents = () => {
  return fetchAPI(BASE_URL + STUDENTS, "GET");
};

export const getStudentById = id => {
  return fetchAPI(BASE_URL + STUDENTS + "/" + id, "GET");
};

export const deleteStudent = id => {
  return fetchAPI(BASE_URL + STUDENTS + "/" + id, "DELETE");
};

export const updateStudent = id => {
  return fetchAPI(BASE_URL + STUDENTS + "/" + id, "PUT");
};

export const createStudent = student => {
  return fetchAPI(BASE_URL + STUDENTS, "POST", student);
};
