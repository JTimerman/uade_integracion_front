import React, { useEffect, useState, Fragment } from "react";
import { Redirect } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Avatar from "@material-ui/core/Avatar";

import Typography from "@material-ui/core/Typography";
import { CircularProgress } from "@material-ui/core";

import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import useStyles from "./styles";
import Fab from "@material-ui/core/Fab";

const HomeHolder = ({ getInvoices, invoices, setInvoiceToPayById }) => {
  const classes = useStyles();

  const [goPay, setGoPay] = React.useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInvoices().then(response => {
      setLoading(false);
    });
  }, [getInvoices]);

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
                    Total amount: ${invoice.amount}
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
