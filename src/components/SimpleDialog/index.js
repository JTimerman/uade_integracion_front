import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

import { getFilteredEmployees } from "../../redux/selectors/employees";

import SimpleDialog from "./SimpleDialog";

const styles = theme => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  },
  select: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: "5%"
  },
  dialogContent: {
    width: "700px"
  },
  items: {
    marginLeft: "-4%"
  }
});

const styledComponent = withStyles(styles)(SimpleDialog);

const mapStateToProps = store => ({
  employees: getFilteredEmployees(store)
});

export default connect(mapStateToProps)(styledComponent);
