import { connect } from "react-redux";
import { payInvoice } from "../../redux/actions/invoices";

import PayAmount from "./PayAmount";

const mapDispatchToProps = {
  payInvoice
};

export default connect(
  null,
  mapDispatchToProps
)(PayAmount);
