import { connect } from "react-redux";

import { getUserRole } from "../../redux/selectors/role";

import Home from "./Home";

const mapStateToProps = store => ({
  role: getUserRole(store)
});

export default connect(mapStateToProps)(Home);
