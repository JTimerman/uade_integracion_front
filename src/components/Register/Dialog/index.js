import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import { getFilteredHolders } from "../../../redux/selectors/holders";

import Dialog from "./Dialog";

const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  grid: {
    display: "flex"
  },
  fieldLabel: {
    fontWeight: 600,
    "&:after": {
      content: "' '"
    }
  },
  fieldContent: {
    "&:after": {
      fontSize: 25,
      content: "' | '"
    },
    "&:last-child": {
      "&:after": {
        content: "''"
      }
    }
  }
});

const styledComponent = withStyles(styles)(Dialog);

const mapStateToProps = store => ({
  holders: getFilteredHolders(store)
});

export default connect(mapStateToProps)(styledComponent);
