import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  grid: {
    display: "flex"
  },
  fieldLabel: {
    fontWeight: 600,
    "&:after": {
      content: "' '"
    }
  },
  fieldContent: {
    "&:after": {
      fontSize: 25,
      content: "' | '"
    },
    "&:last-child": {
      "&:after": {
        content: "''"
      }
    }
  }
}));
