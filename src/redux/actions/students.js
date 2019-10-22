import {
  getStudents as getStudentsService,
  createStudent as createStudentService
} from "../../services/students";

import { SET_STUDENTS } from "./actionTypes.json";

function setStudents(students) {
  return { type: SET_STUDENTS, students };
}

export const getStudents = () => {
  return dispatch => {
    return getStudentsService()
      .then(students => {
        dispatch(setStudents(students));
      })
      .catch(() => Promise.reject(false));
  };
};

export const createStudent = student => {
  return () => {
    return createStudentService(student).catch(() => Promise.reject(false));
  };
};
