import { connect } from "react-redux";

import { addFilter } from "../../redux/actions/filters";
import { getEmployees } from "../../redux/actions/employees";
import { createAbsenteeism } from "../../redux/actions/absenteeism";

import Absenteeism from "./Absenteeism";

const mapDispatchToProps = {
  addFilter,
  getEmployees,
  createAbsenteeism
};

export default connect(
  null,
  mapDispatchToProps
)(Absenteeism);
