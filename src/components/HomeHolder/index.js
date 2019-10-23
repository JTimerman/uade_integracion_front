import { connect } from "react-redux";
import { getInvoices as getInvoicesSelector } from "../../redux/selectors/invoices";
import { getInvoices } from "../../redux/actions/holders";

import HomeHolder from "./HomeHolder";

const mapStateToProps = store => ({
  invoices: getInvoicesSelector(store)
});

const mapDispatchToProps = {
  getInvoices
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeHolder);
