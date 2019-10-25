import { connect } from "react-redux";

import { getHolders as getHoldersSelector } from "../../redux/selectors/holders";
import {
  getHolders,
  updateHolder,
  deleteHolder
} from "../../redux/actions/holders";

import { getEmployees as getEmployeesSelector } from "../../redux/selectors/employees";
import {
  getEmployees,
  updateEmployee,
  deleteEmployee
} from "../../redux/actions/employees";

import { getStudents as getStudentsSelector } from "../../redux/selectors/students";
import {
  getStudents,
  updateStudent,
  deleteStudent
} from "../../redux/actions/students";

import UsersList from "./UsersList";

const mapDispatchToProps = {
  getHolders,
  getEmployees,
  getStudents,
  updateHolder,
  updateStudent,
  updateEmployee,
  deleteEmployee,
  deleteHolder,
  deleteStudent
};
const mapStateToProps = store => ({
  holders: getHoldersSelector(store),
  employees: getEmployeesSelector(store),
  students: getStudentsSelector(store)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
