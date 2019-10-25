import React from "react";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default function DebitCard({ invoiceToPay, classes, payInvoice }) {
  const [values, setValues] = React.useState();
  const [hasError, setHasError] = React.useState(false);
  const [correctPayment, setCorrectPayment] = React.useState(false);

  const handleChange = name => event => {
    setHasError(false);
    setValues({ ...values, [name]: event.target.value });
  };

  const handlerClickPay = () => {
    if (isEmpty(values.cbu)) {
      setHasError(true);
      toast.error("There are missing fields!");
      return;
    }
    payInvoice({ ...values, payment_method: "DEBITO" })
      .then(() => {
        toast.success("You paid successfully!");
        setCorrectPayment(true);
      })
      .catch(() => {
        toast.error("There was an error processing the payment!");
      });
  };

  if (correctPayment) return <Redirect to={{ pathname: "/payments" }} />;

  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          error={hasError}
          id="standard-name"
          label="cbu"
          type="number"
          onChange={handleChange("cbu")}
          margin="normal"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Input
          id="adornment-amount"
          value={new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "ARS"
          }).format(invoiceToPay.amount)}
          fullWidth
          className={classes.input}
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
