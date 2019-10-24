import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

import { getInvoices as getInvoicesSelector } from "../../redux/selectors/invoices";
import { getInvoices } from "../../redux/actions/holders";
import { setInvoiceToPayById } from "../../redux/actions/invoiceToPay";

import HomeHolder from "./HomeHolder";

const styles = theme => ({
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
    display: "flex",
    marginBottom: "10px"
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
});

const styledComponent = withStyles(styles)(HomeHolder);

const mapStateToProps = store => ({
  invoices: getInvoicesSelector(store)
});

const mapDispatchToProps = {
  getInvoices,
  setInvoiceToPayById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledComponent);
