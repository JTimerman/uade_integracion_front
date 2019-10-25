import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import { getPersonalData } from "../../redux/selectors/personalData";

import StudentData from "./StudentData";

const styles = () => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  name: {
    textAlign: "center"
  },
  data: {
    display: "flex",
    width: "60%"
  },
  content: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  field: {
    flex: "1 0 50%",
    display: "flex",
    flexDirection: "row",
    justifyItems: "center"
  },
  icon: {
    alignSelf: "center",
    padding: "0 20px"
  },
  label: {
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  services: {
    marginTop: "5%"
  }
});

const styledComponent = withStyles(styles)(StudentData);

const mapStateToProps = store => ({
  personalData: getPersonalData(store)
});

export default connect(mapStateToProps)(styledComponent);
