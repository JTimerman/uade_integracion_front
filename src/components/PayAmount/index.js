import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { payInvoice } from "../../redux/actions/invoices";

import PayAmount from "./PayAmount";

const mapDispatchToProps = {
  payInvoice
};

const styles = () => ({
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  root: {
    display: "flex",
    flexWrap: "wrap"
  }
});

const styledComponent = withStyles(styles)(PayAmount);

export default connect(
  null,
  mapDispatchToProps
)(styledComponent);
