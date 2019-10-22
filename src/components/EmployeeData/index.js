import { connect } from "react-redux";

import EmployeeData from "./EmployeeData";
import {
  getUserName,
  getUserLastname,
  getUserEmail,
  getUserSalary,
  getUserAddress,
  getUserPhone,
  getUserStartDate
} from "../../redux/selectors/personalData";

const mapStateToProps = store => ({
  address: getUserAddress(store),
  email: getUserEmail(store),
  lastname: getUserLastname(store),
  name: getUserName(store),
  phone: getUserPhone(store),
  salary: getUserSalary(store),
  startDate: getUserStartDate(store)
});

export default connect(mapStateToProps)(EmployeeData);
