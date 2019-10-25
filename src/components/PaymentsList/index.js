import { connect } from "react-redux";

import { getPayments as getPaymentsSelector } from "../../redux/selectors/payments";

import { getPayments } from "../../redux/actions/payments";

import PaymentsList from "./PaymentsList";

const mapStateToProps = store => ({
  payments: getPaymentsSelector(store)
});

const mapDispatchToProps = {
  getPayments
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentsList);
