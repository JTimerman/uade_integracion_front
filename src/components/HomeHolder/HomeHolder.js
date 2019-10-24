import React, { useEffect, useState, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { CircularProgress } from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";

const HomeHolder = ({
  getInvoices,
  invoices,
  setInvoiceToPayById,
  classes
}) => {
  const [goPay, setGoPay] = React.useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInvoices()
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        toast.error("There was an error loading the invoices!");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerClick = event => {
    const id = event.currentTarget.getAttribute("invoiceid");

    setInvoiceToPayById(id);
    setGoPay(true);
  };
  if (goPay) return <Redirect to="/payAmount" />;

  const dateOptions = {
    month: "string",
    year: "numeric"
  };

  return loading ? (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
  ) : (
    <Fragment>
      {invoices
        .filter(invoice => !invoice.payed)
        .map((invoice, index) => {
          return (
            <Fragment key={index}>
              <Card className={classes.CardHeader}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      {invoice.name.charAt(0)}
                    </Avatar>
                  }
                  title={invoice.name + " " + invoice.lastname}
                  subheader={new Date(invoice.date).toDateString(dateOptions)}
                />
                <CardContent className={classes.CardContent}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Total amount: $
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "ARS"
                    }).format(invoice.amount)}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Fab
                    variant="extended"
                    size="medium"
                    color="primary"
                    aria-label="add"
                    className={classes.margin}
                    onClick={handlerClick}
                    invoiceid={invoice.id}
                  >
                    <AttachMoneyIcon className={classes.AttachMoneyIcon} />
                    Pay amount
                  </Fab>
                </CardActions>
              </Card>
            </Fragment>
          );
        })}
    </Fragment>
  );
};
export default HomeHolder;
