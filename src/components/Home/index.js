import { connect } from "react-redux";

import { getUserRoles } from "../../redux/selectors/roles";

import Home from "./Home";

const mapStateToProps = store => ({
  roles: getUserRoles(store)
});

export default connect(mapStateToProps)(Home);
