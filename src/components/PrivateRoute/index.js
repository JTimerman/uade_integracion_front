import { connect } from "react-redux";

import { getUserRole } from "../../redux/selectors/role";

import { PrivateRoute } from "./PrivateRoute";
import { setPersonalData } from "../../redux/actions/personalData";
import { setRole } from "../../redux/actions/role";

const mapStateToProps = state => ({
  role: getUserRole(state)
});

const mapDispatchToProps = {
  setPersonalData,
  setRole
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
