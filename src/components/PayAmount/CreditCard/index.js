import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import { payInvoice } from "../../../redux/actions/invoices";
import { getInvoiceToPay } from "../../../redux/selectors/invoices";

import CreditCard from "./CreditCard";

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
  },
  input: {
    marginTop: "32px"
  }
});

const mapStateToProps = store => ({
  invoiceToPay: getInvoiceToPay(store)
});

const mapDispatchToProps = {
  payInvoice
};

const styledComponent = withStyles(styles)(CreditCard);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledComponent);
