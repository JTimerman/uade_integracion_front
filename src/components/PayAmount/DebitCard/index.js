import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import { getInvoiceToPay } from "../../../redux/selectors/invoices";

import DebitCard from "./DebitCard";

const mapStateToProps = store => ({
  invoiceToPay: getInvoiceToPay(store)
});

const styles = () => ({
  input: {
    marginTop: "32px"
  }
});

const styledComponent = withStyles(styles)(DebitCard);

export default connect(mapStateToProps)(styledComponent);
