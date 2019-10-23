import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Typography from "@material-ui/core/Typography";

const recibos = [
  {
    date: "20/10/2019",
    amount: 4000,
    paymentMethod: "Credit Card Visa"
  },
  {
    date: "25/10/2019",
    amount: 3500,
    paymentMethod: "Credit Card Visa"
  },
  {
    date: "19/10/2019",
    amount: 1200,
    paymentMethod: "Credit Card Visa"
  }
];

const Payments = ({ classes }) => {
  return (
    <div>
      {recibos.map((recibo, index) => {
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
                    Payment Method: {recibo.paymentMethod}
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.typography}
                  >
                    Date: {recibo.date}
                  </Typography>
                </div>
                <CheckCircleOutlineRoundedIcon className={classes.CheckIcon} />
              </CardContent>
              <CardActions disableSpacing>
                <AttachMoneyIcon className={classes.AttachMoneyIcon} />{" "}
                {recibo.amount}
              </CardActions>
            </Card>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Payments;
