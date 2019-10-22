import React, { Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import useStyles from "./styles";

import Typography from "@material-ui/core/Typography";

const envoices = [
  {
    date: "20/10/2019",
    Amount: 4000,
    PaymentMethod: "Credit Card Visa"
  },
  {
    date: "25/10/2019",
    Amount: 3500,
    PaymentMethod: "Credit Card Visa"
  },
  {
    date: "19/10/2019",
    Amount: 1200,
    PaymentMethod: "Credit Card Visa"
  }
];

const Payments = () => {
  const classes = useStyles();

  return (
    <div>
      {envoices.map((envoice, index) => {
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
                    Payment Method: {envoice.PaymentMethod}
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Date: {envoice.date}
                  </Typography>
                </div>
                <CheckCircleOutlineRoundedIcon className={classes.CheckIcon} />
              </CardContent>
              <CardActions disableSpacing>
                <AttachMoneyIcon className={classes.AttachMoneyIcon} />{" "}
                {envoice.Amount}
              </CardActions>
            </Card>
          </Fragment>
        );
      })}
    </div>
  );
};

export default withStyles()(Payments);
