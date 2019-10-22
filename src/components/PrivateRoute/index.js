import { connect } from "react-redux";

import { getUserRole } from "../../redux/selectors/role";

import { PrivateRoute } from "./PrivateRoute";

const mapStateToProps = state => ({
  role: getUserRole(state)
});

export default connect(mapStateToProps)(PrivateRoute);
