import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import Select from "@material-ui/core/Select";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import SimpleDialog from "../SimpleDialog";

const initialValues = {
  absenteeismType: ""
};

export default function Absenteeism({
  classes,
  addFilter,
  getEmployees,
  createAbsenteeism
}) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [employeeLastName, setEmployeeLastName] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState();
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());

  useEffect(() => {
    getEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchEmployee = () => {
    const filter = {
      field: "employees",
      type: "lastName",
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

  const handleSelectedStartDate = date => {
    setSelectedStartDate(new Date(date).toISOString());
  };

  const handleSelectedEndDate = date => {
    setSelectedEndDate(new Date(date).toISOString());
  };

  const handleClick = event => {
    event.preventDefault();
    const absenteeism = {
      id: selectedEmployee,
      reason: values.absenteeismType,
      start_date: selectedStartDate,
      end_date: selectedEndDate
    };

    createAbsenteeism(absenteeism)
      .then(() => {
        toast.success("You loaded the absences successfully!");
      })
      .catch(response => {
        if (response.error)
          return toast.error(
            `There was an error creating the absence: '${response.error}'`
          );
        return toast.error("There was an error loading the absences!");
      });
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
                    onChange={handleSelectedStartDate}
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
                    onChange={handleSelectedEndDate}
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
              onClick={handleClick}
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
            onKeyPress={ev => ev.key === "Enter" && handleSearchEmployee()}
          />
          <IconButton
            className={classes.iconButton}
            aria-label="search"
            onClick={handleSearchEmployee}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      )}
    </Fragment>
  );
}
