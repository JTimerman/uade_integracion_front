import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(theme => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  },
  select: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: "5%"
  },
  dialogContent: {
    width: "700px"
  },
  items: {
    marginLeft: "-4%"
  }
}));
