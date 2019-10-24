import {
  getStudents as getStudentsService,
  createStudent as createStudentService,
  updateStudent as updateStudentService,
  deleteStudent as deleteStudentService
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
    return createStudentService(student).catch(error => {
      Promise.reject(error);
    });
  };
};

export const updateStudent = (id, newStudent) => {
  return () => {
    return updateStudentService(id, newStudent).catch(error => {
      Promise.reject(error);
    });
  };
};

export const deleteStudent = id => {
  return () => {
    return deleteStudentService(id).catch(error => {
      Promise.reject(error);
    });
  };
};
