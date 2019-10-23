import { connect } from "react-redux";

import { getFilteredEmployees } from "../../redux/selectors/employees";

import SimpleDialog from "./SimpleDialog";

const mapStateToProps = store => ({
  employees: getFilteredEmployees(store)
});

export default connect(mapStateToProps)(SimpleDialog);
