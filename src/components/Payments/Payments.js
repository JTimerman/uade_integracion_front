import React, { Fragment, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Typography from "@material-ui/core/Typography";

const Payments = ({ classes, payments, getHolderPayments }) => {
  useEffect(() => {
    getHolderPayments();
  }, [getHolderPayments]);

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return (
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
                {payment.amount}
              </CardActions>
            </Card>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Payments;
