import { connect } from "react-redux";
import { getInvoices as getInvoicesSelector } from "../../redux/selectors/invoices";
import { getInvoices } from "../../redux/actions/holders";
import { setInvoiceToPayById } from "../../redux/actions/invoiceToPay";

import HomeHolder from "./HomeHolder";

const mapStateToProps = store => ({
  invoices: getInvoicesSelector(store)
});

const mapDispatchToProps = {
  getInvoices,
  setInvoiceToPayById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeHolder);
