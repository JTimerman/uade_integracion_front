import React, { Fragment, useEffect, useState } from "react";
import useStyles from "./styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import SimpleDialog from "../SimpleDialog";
import DateFnsUtils from "@date-io/date-fns";

const initialValues = {
  absenteeismType: ""
};

const Absenteeism = ({ addFilter, getEmployees }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [employeeLastName, setEmployeeLastName] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState();
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());

  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  const handlerSearchEmployee = () => {
    const filter = {
      field: "employees",
      type: "last_name",
      filter: employeeLastName
    };

    addFilter(filter);
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedEmployee(value);
  };

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  const HandleSelectedStartDate = date => {
    console.log(date);
    setSelectedStartDate(new Date(date).toISOString());
  };

  const HandleSelectedEndDate = date => {
    setSelectedEndDate(new Date(date).toISOString());
  };

  const handlerClick = event => {
    event.preventDefault();
  };

  const absenteeismType = ["Vacation", "Medical day"];
  return (
    <Fragment>
      {selectedEmployee && (
        <Fragment>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    label="Start date"
                    name="startDate"
                    value={selectedStartDate}
                    onChange={HandleSelectedStartDate}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                    fullWidth
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    label="End Date"
                    name="endDate"
                    value={selectedEndDate}
                    onChange={HandleSelectedEndDate}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                    fullWidth
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Absenteeism type</InputLabel>
              <Select
                value={values.absenteeismType}
                className={classes.select}
                fullWidth
                onChange={handleChange("absenteeismType")}
              >
                {absenteeismType.map((type, index) => {
                  return (
                    <MenuItem key={index} value={type}>
                      {type}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.grid}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={handlerClick}
            >
              Send
            </Button>
          </Grid>
        </Fragment>
      )}
      <SimpleDialog
        selectedEmployee={selectedEmployee}
        open={open}
        onClose={handleClose}
      />
      {!selectedEmployee && (
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search by lastname"
            value={employeeLastName}
            onChange={event => setEmployeeLastName(event.target.value)}
          />
          <IconButton
            className={classes.iconButton}
            aria-label="search"
            onClick={handlerSearchEmployee}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      )}
    </Fragment>
  );
};

export default withStyles()(Absenteeism);
