import { connect } from "react-redux";
import Dialog from "./Dialog";

import { getHolders } from "../../redux/selectors/holders";

const mapStateToProps = store => ({
  holders: getHolders(store)
});

export default connect(mapStateToProps)(Dialog);
