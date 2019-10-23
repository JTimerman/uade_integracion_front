import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import { getInvoiceToPay } from "../../../redux/selectors/invoices";

import CreditCard from "./CreditCard";

const mapStateToProps = store => ({
  invoiceToPay: getInvoiceToPay(store)
});

const styles = () => ({
  input: {
    marginTop: "32px"
  }
});

const styledComponent = withStyles(styles)(CreditCard);

export default connect(mapStateToProps)(styledComponent);
