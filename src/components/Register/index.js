import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { createStudent } from "../../redux/actions/students";
import { getHolders } from "../../redux/actions/holders";

import Register from "./Register";

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
  createStudent,
  getHolders
};

export default connect(
  null,
  mapDispatchToProps
)(styledComponent);
