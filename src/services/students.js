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
  const sentStudent = {
    ...student,
    service_ids: [
      ...student.service_ids,
      student.scholarship_type === "Medio Turno" ? 10001 : 10002
    ]
  };
  return fetchAPI(BASE_URL + STUDENTS, "POST", sentStudent);
};
