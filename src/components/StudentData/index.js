import { connect } from "react-redux";
import { getPersonalData } from "../../redux/selectors/personalData";
import StudentData from "./StudentData";

const mapStateToProps = store => ({
  personalData: getPersonalData(store)
});

export default connect(mapStateToProps)(StudentData);
