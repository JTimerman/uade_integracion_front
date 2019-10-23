import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import useStyles from "./styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { toast } from "react-toastify";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

const PayAmount = ({ payInvoice, invoiceToPay }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState();
  const [selectedDate, setSelectedDate] = React.useState();

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handlerClickPay = () => {
    payInvoice().then(response => {
      toast.success("You paid successfully!");
    });
  };

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-name"
            label="Number of credit card"
            type="number"
            onChange={handleChange("numberCreditCard")}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-name"
            label="Security code"
            type="password"
            onChange={handleChange("securityCode")}
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
                format="MM/dd/yyyy"
                margin="normal"
                label="Date of expery"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
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
      </Grid>
    </Fragment>
  );
};

export default withStyles(useStyles)(PayAmount);
