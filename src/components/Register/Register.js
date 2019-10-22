import React, { useEffect, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

import Dialog from "../Dialog";

const RegisterForm = ({
  location,
  classes,
  createStudent,
  getHolders,
  createEmployee,
  createHolder
}) => {
  const initialValues = {
    name: "",
    lastname: "",
    holderlastname: "",
    holderid: "",
    phone: "",
    address: "",
    salary: "",
    scholarshipType: ""
  };
  const [values, setValues] = React.useState(initialValues);
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const path = location.pathname;

  const ScholarshipType = ["Doble Turno", "Medio Turno"];
  useEffect(() => {
    if (path === "/registerStudent") {
      getHolders();
      setValues(currentValues => ({ ...currentValues, role: "Student" }));
    } else if (path === "/registerEmployee") {
      setValues(currentValues => ({ ...currentValues, role: "Employee" }));
    } else {
      setValues(currentValues => ({ ...currentValues, role: "Holder" }));
    }
  }, [path, getHolders]);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlerAccept = event => {
    setValues(currentValues => ({
      ...currentValues,
      holderid: event.currentTarget.getAttribute("holderid"),
      holderlastname: event.currentTarget.getAttribute("holderlastname")
    }));
    setOpen(false);
  };

  const handlerClickRegister = event => {
    event.preventDefault();
    const {
      name,
      lastname,
      phone,
      scholarshipType,
      address,
      holderid
    } = values;

    switch (values.role) {
      case "Student":
        const student = {
          name,
          last_name: lastname,
          phone,
          scholarship_type: scholarshipType,
          address,
          email: `${name[0] + lastname}@school.edu.ar`.toLowerCase(),
          holder_id: holderid
        };

        createStudent(student);
        break;

      case "Employee":
        const { salary } = values;
        const employee = {
          name,
          last_name: lastname,
          phone,
          start_date: selectedDate.toISOString(),
          address,
          email: `${name[0] + lastname}@school.edu.ar`.toLowerCase(),
          salary
        };

        createEmployee(employee);
        break;

      case "Holder":
        const holder = {
          name,
          last_name: lastname,
          phone,
          address,
          email: `${name[0] + lastname}@school.edu.ar`.toLowerCase()
        };

        createHolder(holder);
        break;
      default:
        console.log(values.role);
        break;
    }
  };

  const handlerSearchHolder = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Register {values.role}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="First name"
            fullWidth
            autoComplete="name"
            onChange={handleChange("name")}
            value={values.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastname"
            name="lastname"
            label="Last name"
            fullWidth
            autoComplete="lastname"
            onChange={handleChange("lastname")}
            value={values.lastname}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone number"
            fullWidth
            type="number"
            onChange={handleChange("phone")}
            value={values.phone}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="address"
            name="address"
            label="Address"
            fullWidth
            value={values.address}
            onChange={handleChange("address")}
          />
        </Grid>
        {path === "/registerEmployee" && (
          <Fragment>
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
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                    fullWidth
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="adornment-amount">Salary</InputLabel>
              <Input
                required
                id="salary"
                name="salary"
                label="Salary"
                fullWidth
                type="number"
                className={classes.input}
                onChange={handleChange("salary")}
                value={values.salary}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </Grid>
          </Fragment>
        )}

        {path === "/registerStudent" && (
          <Fragment>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Holder"
                fullWidth
                placeholder="Search by lastname.."
                value={values.holderlastname}
                onChange={handleChange("holderlastname")}
                InputProps={{
                  startAdornment: (
                    <IconButton
                      color="secondary"
                      className={classes.button}
                      onClick={handlerSearchHolder}
                    >
                      <SearchIcon />
                    </IconButton>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Scholarship Type</InputLabel>
              <Select
                value={values.scholarshipType}
                className={classes.select}
                fullWidth
                onChange={handleChange("scholarshipType")}
              >
                {ScholarshipType.map((type, index) => {
                  return (
                    <MenuItem key={index} value={type}>
                      {type}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
          </Fragment>
        )}
        <Dialog
          handleClose={handleClose}
          open={open}
          handlerAccept={handlerAccept}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={handlerClickRegister}
        >
          Create
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default RegisterForm;
