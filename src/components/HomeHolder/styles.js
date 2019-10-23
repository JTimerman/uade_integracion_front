import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  CardHeader: {
    display: "flex"
  },
  AttachMoneyIcon: {
    marginRight: theme.spacing(1)
  },
  CardContent: {
    marginTop: "2%"
  },
  loader: {
    minHeight: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));
