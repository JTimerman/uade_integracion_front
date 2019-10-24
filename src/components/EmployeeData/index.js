import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import {
  getUserName,
  getUserLastname,
  getUserEmail,
  getUserSalary,
  getUserAddress,
  getUserPhone,
  getUserStartDate
} from "../../redux/selectors/personalData";

import EmployeeData from "./EmployeeData";

const styles = () => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  name: {
    textAlign: "center"
  },
  subtitle: {
    textAlign: "center",
    fontStyle: "italic"
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
  }
});

const styledComponent = withStyles(styles)(EmployeeData);

const mapStateToProps = store => ({
  address: getUserAddress(store),
  email: getUserEmail(store),
  lastname: getUserLastname(store),
  name: getUserName(store),
  phone: getUserPhone(store),
  salary: getUserSalary(store),
  startDate: getUserStartDate(store),
  personalData: store.personalData
});

export default connect(mapStateToProps)(styledComponent);
