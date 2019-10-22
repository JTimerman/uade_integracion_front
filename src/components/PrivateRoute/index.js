import { connect } from "react-redux";

import { getUserRoles } from "../../redux/selectors/roles";

import { PrivateRoute } from "./PrivateRoute";
import { setPersonalData } from "../../redux/actions/personalData";
import { setRoles } from "../../redux/actions/roles";

const mapStateToProps = state => ({
  roles: getUserRoles(state)
});

const mapDispatchToProps = {
  setPersonalData,
  setRoles
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
