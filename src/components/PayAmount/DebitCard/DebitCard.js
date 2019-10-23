import React from "react";
import { toast } from "react-toastify";

import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default function DebitCard({ invoiceToPay, classes, payInvoice }) {
  const [values, setValues] = React.useState();

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handlerClickPay = () => {
    payInvoice({ ...values, cardType: "debit" }).then(response => {
      toast.success("You paid successfully!");
    });
  };

  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          id="standard-name"
          label="CBU"
          type="number"
          onChange={handleChange("CBU")}
          margin="normal"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Input
          id="adornment-amount"
          value={invoiceToPay.amount}
          fullWidth
          className={classes.input}
          onChange={handleChange("amount")}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </Grid>
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
    </>
  );
}
