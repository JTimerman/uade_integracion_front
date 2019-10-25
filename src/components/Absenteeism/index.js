import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import { addFilter } from "../../redux/actions/filters";
import { getEmployees } from "../../redux/actions/employees";
import { createAbsenteeism } from "../../redux/actions/absenteeism";

import Absenteeism from "./Absenteeism";

const styles = theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  grid: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "1%"
  },
  button: {
    margin: theme.spacing(1)
  }
});

const styledComponent = withStyles(styles)(Absenteeism);

const mapDispatchToProps = {
  addFilter,
  getEmployees,
  createAbsenteeism
};

export default connect(
  null,
  mapDispatchToProps
)(styledComponent);
