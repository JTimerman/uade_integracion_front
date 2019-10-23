import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { toast } from "react-toastify";

import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";

export default function PayAmount({ payInvoice, classes }) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const handlerClickPay = () => {
    payInvoice().then(response => {
      toast.success("You paid successfully!");
    });
  };

  if (paymentMethod === "") {
    return (
      <Grid item xs={12} sm={6}>
        <FormLabel component="legend">PaymentMethod</FormLabel>
        <RadioGroup
          aria-label="paymentMethod"
          name="paymentMethod"
          id="paymentMethod"
          value={paymentMethod}
          onChange={event => setPaymentMethod(event.target.value)}
        >
          <FormControlLabel
            value="creditCard"
            control={<Radio />}
            label="Credit Card"
          />
          <FormControlLabel
            value="debitCard"
            control={<Radio />}
            label="Debit Card"
          />
        </RadioGroup>
      </Grid>
    );
  }

  return (
    <Grid container spacing={3}>
      {paymentMethod === "creditCard" ? <CreditCard /> : <DebitCard />}
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={handlerClickPay}
        >
          Pay Amount
        </Button>
      </Grid>
    </Grid>
  );
}
