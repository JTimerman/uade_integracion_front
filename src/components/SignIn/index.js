import { connect } from "react-redux";
import { authenticateUser } from "../../redux/actions/authentification";

import SignIn from "./SignIn";

const mapDispatchToProps = {
  authenticateUser
};

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
