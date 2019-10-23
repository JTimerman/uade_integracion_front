import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";

export default function PayAmount() {
  const [paymentMethod, setPaymentMethod] = useState("");

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
    </Grid>
  );
}
