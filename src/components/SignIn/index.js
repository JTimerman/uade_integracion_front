import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { authenticateUser } from "../../redux/actions/authentification";

import SignIn from "./SignIn";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  margin: {
    margin: theme.spacing(1)
  },
  p: {
    color: "red",
    marginTop: "3%",
    textAlign: "center",
    fontSize: "13px"
  },
  loader: {
    minHeight: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

const styledComponent = withStyles(styles)(SignIn);

const mapDispatchToProps = {
  authenticateUser
};

export default connect(
  null,
  mapDispatchToProps
)(styledComponent);
