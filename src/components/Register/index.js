import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { createEmployee } from "../../redux/actions/employees";
import { createStudent } from "../../redux/actions/students";
import { createHolder } from "../../redux/actions/holders";
import { getHolders } from "../../redux/actions/holders";

import Register from "./Register";
import { getServices } from "../../redux/actions/services";
import { getServices as _getServices } from "../../redux/selectors/services";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1)
  },
  select: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: "5%"
  },
  input: {
    marginTop: "2%"
  }
});

const styledComponent = withStyles(styles)(Register);

const mapDispatchToProps = {
  createEmployee,
  createStudent,
  createHolder,
  getHolders,
  getServices
};

const mapStateToProps = state => ({
  services: _getServices(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledComponent);
