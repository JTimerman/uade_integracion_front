import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(theme => ({
  CardContent: {
    display: "flex"
  },
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3)
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  },
  CheckIcon: {
    color: "green",
    marginLeft: "65%",
    fontSize: "45px"
  },
  typography: {
    marginLeft: "5px"
  }
}));
