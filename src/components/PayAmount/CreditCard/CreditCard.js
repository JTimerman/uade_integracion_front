import React from "react";

import { toast } from "react-toastify";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

export default function CreditCard({ invoiceToPay, classes, payInvoice }) {
  const [selectedDate, setSelectedDate] = React.useState();
  const [values, setValues] = React.useState({ payments: 1 });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handlerClickPay = () => {
    payInvoice({
      ...values,
      payment_method: "CREDITO",
      expiration_date: `${selectedDate.getUTCMonth() +
        1}/${selectedDate.getUTCFullYear()}`
    })
      .then(() => {
        toast.success("You paid successfully!");
      })
      .catch(() => {
        toast.error("There was an error processing the payment!");
      });
  };

  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          id="standard-name"
          label="Number of credit card"
          onChange={handleChange("card_number")}
          margin="normal"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="standard-name"
          label="Security code"
          type="password"
          onChange={handleChange("cvv")}
          margin="normal"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              fullWidth
              variant="inline"
              format="MM/yyyy"
              margin="normal"
              label="Expiration date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
              views={["year", "month"]}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Input
          id="adornment-amount"
          disabled
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
        <InputLabel htmlFor="cuotes-simple">Cuotes</InputLabel>
        <Select
          value={values.payments}
          onChange={handleChange("payments")}
          style={{ width: "120px" }}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
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
