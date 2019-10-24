import { connect } from "react-redux";
import Dialog from "./Dialog";

import { getFilteredHolders } from "../../redux/selectors/holders";

const mapStateToProps = store => ({
  holders: getFilteredHolders(store)
});

export default connect(mapStateToProps)(Dialog);
