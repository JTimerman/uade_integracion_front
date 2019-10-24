import React, { Fragment, useEffect, useState } from "react";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { toast } from "react-toastify";

const Payments = ({ classes, payments, getHolderPayments }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHolderPayments()
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        toast.error("There was an error loading the payments!");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return loading ? (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
  ) : (
    <div>
      {payments.map((payment, index) => {
        return (
          <Fragment key={index}>
            <Card className={classes.CardHeader}>
              <CardContent className={classes.CardContent}>
                <div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Payment Method: {payment.paymentMethod}
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.typography}
                  >
                    Date:{" "}
                    {new Date(payment.date).toLocaleDateString(
                      "en-US",
                      dateOptions
                    )}
                  </Typography>
                </div>
                <CheckCircleOutlineRoundedIcon className={classes.CheckIcon} />
              </CardContent>
              <CardActions disableSpacing>
                <AttachMoneyIcon className={classes.AttachMoneyIcon} />{" "}
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "ARS"
                }).format(payment.amount)}
              </CardActions>
            </Card>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Payments;
