import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getHolderPayments } from "../../redux/actions/holders";
import { getPayments } from "../../redux/selectors/payments";

import Payments from "./Payments";

const styles = theme => ({
  CardContent: {
    display: "flex"
  },
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3)
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  },
  CheckIcon: {
    color: "green",
    marginLeft: "65%",
    fontSize: "45px"
  },
  typography: {
    marginLeft: "5px"
  }
});

const mapStateToProps = store => ({
  payments: getPayments(store)
});

const mapDispatchToProps = {
  getHolderPayments
};

const styledComponents = withStyles(styles)(Payments);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledComponents);
