import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import { payInvoice } from "../../../redux/actions/invoices";
import { getInvoiceToPay } from "../../../redux/selectors/invoices";

import DebitCard from "./DebitCard";

const styles = () => ({
  input: {
    marginTop: "32px"
  }
});

const styledComponent = withStyles(styles)(DebitCard);

const mapStateToProps = store => ({
  invoiceToPay: getInvoiceToPay(store)
});

const mapDispatchToProps = {
  payInvoice
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledComponent);
