import { connect } from "react-redux";
import { getPayroll } from "../../redux/actions/payroll";
import Payroll from "./Payroll";

const mapStateToProps = store => ({
  payroll: store.payroll
});

const mapDispatchToProps = {
  getPayroll
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payroll);
