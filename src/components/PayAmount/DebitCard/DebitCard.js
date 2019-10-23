import React from "react";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export default function DebitCard({ invoiceToPay, classes }) {
  const [selectedDate, setSelectedDate] = React.useState();
  const [values, setValues] = React.useState();

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return <></>;
}
