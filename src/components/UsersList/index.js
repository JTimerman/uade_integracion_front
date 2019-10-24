import { connect } from "react-redux";

import { getHolders as getHoldersSelector } from "../../redux/selectors/holders";
import { getHolders } from "../../redux/actions/holders";

import { getEmployees as getEmployeesSelector } from "../../redux/selectors/employees";
import { getEmployees } from "../../redux/actions/employees";

import { getStudents as getStudentsSelector } from "../../redux/selectors/students";
import { getStudents } from "../../redux/actions/students";

import UsersList from "./UsersList";

const mapDispatchToProps = {
  getHolders,
  getEmployees,
  getStudents
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
