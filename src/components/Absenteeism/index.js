import { connect } from "react-redux";

import { addFilter } from "../../redux/actions/filters";
import { getEmployees } from "../../redux/actions/employees";

import Absenteeism from "./Absenteeism";

const mapDispatchToProps = {
  addFilter,
  getEmployees
};

export default connect(
  null,
  mapDispatchToProps
)(Absenteeism);
