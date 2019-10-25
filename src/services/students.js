import fetchAPI from "../api/fetchAPI";
import { BASE_URL, STUDENTS } from "../constants/endpoints.json";

export const getStudents = () => {
  return fetchAPI(BASE_URL + STUDENTS, "GET").then(students =>
    students.map(student => ({
      ...student,
      lastName: student.last_name,
      last_name: undefined
    }))
  );
};

export const getStudentById = id => {
  return fetchAPI(BASE_URL + STUDENTS + "/" + id, "GET");
};

export const deleteStudent = id => {
  return fetchAPI(BASE_URL + STUDENTS + "/" + id, "DELETE");
};

export const updateStudent = (id, newStudent) => {
  const sentStudent = {
    ...newStudent,
    last_name: newStudent.lastName
  };
  return fetchAPI(BASE_URL + STUDENTS + "/" + id, "PUT", sentStudent);
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
