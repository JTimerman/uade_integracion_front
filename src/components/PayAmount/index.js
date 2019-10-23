import { connect } from "react-redux";
import { payInvoice } from "../../redux/actions/invoices";
import { getInvoiceToPay } from "../../redux/selectors/invoices";

import PayAmount from "./PayAmount";

const mapDispatchToProps = {
  payInvoice
};

const mapStateToProps = store => ({
  invoiceToPay: getInvoiceToPay(store)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PayAmount);
