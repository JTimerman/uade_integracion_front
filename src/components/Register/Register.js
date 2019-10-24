import React, { useEffect, Fragment, useState } from "react";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import DateFnsUtils from "@date-io/date-fns";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import SearchIcon from "@material-ui/icons/Search";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import Dialog from "./Dialog";

const RegisterForm = ({
  location,
  classes,
  createStudent,
  getHolders,
  getServices,
  createEmployee,
  createHolder,
  services,
  addFilter
}) => {
  const ScholarshipType = ["Doble Turno", "Medio Turno"];

  const initialValues = {
    name: "",
    lastname: "",
    holderlastname: "",
    holderid: "",
    phone: "",
    address: "",
    salary: "",
    cuil: "",
    employeeCode: "",
    gender: "",
    scholarshipType: ScholarshipType[0],
    rol: "Teacher"
  };

  const [values, setValues] = React.useState(initialValues);
  const [open, setOpen] = React.useState(false);
  const [selectedStartDate, setSelectedStartDate] = React.useState(new Date());
  const [selectedBirthdate, setSelectedBirthdate] = React.useState(new Date());
  const [servicesChosen, setServicesChosen] = React.useState([]);
  const [hasError, setHasError] = useState(false);
  const path = location.pathname;

  useEffect(() => {
    if (path === "/registerStudent") {
      getHolders().catch(() => {
        toast.error("There was an error loading the holders!");
      });
      getServices().catch(() => {
        toast.error("There was an error loading the services!");
      });
      setValues(currentValues => ({ ...currentValues, role: "Student" }));
    } else if (path === "/registerEmployee") {
      setValues(currentValues => ({ ...currentValues, role: "Employee" }));
    } else {
      setValues(currentValues => ({ ...currentValues, role: "Holder" }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStartDateChange = date => {
    setSelectedStartDate(date);
  };

  const handleBirthdateChange = date => {
    setSelectedBirthdate(date);
  };

  const handleChange = name => event => {
    setHasError(false);
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAccept = event => {
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
      rol,
      holderid
    } = values;

    if (!name || !lastname || !phone) {
      toast.error("All required fields should be filled up");
      setHasError(true);
      return;
    }

    switch (values.role) {
      case "Student":
        if (!holderid) {
          toast.error("You should select a holder");
          setHasError(true);
          return;
        }
        if (!servicesChosen.length) {
          toast.error("You should select at least one service");
          setHasError(true);
          return;
        }

        const student = {
          name,
          last_name: lastname,
          phone,
          scholarship_type: scholarshipType,
          service_ids: servicesChosen.map(s => s.id),
          address,
          email: `${name[0] + lastname}@school.edu.ar`.toLowerCase(),
          holder_id: holderid
        };

        createStudent(student)
          .then(() => {
            toast.success("The register was successfull!");
            setValues(initialValues);
            setServicesChosen([]);
          })
          .catch(() => {
            toast.error("An error has ocurred while creating a student!");
          });
        break;

      case "Employee":
        const employee = {
          name,
          last_name: lastname,
          phone,
          start_date: selectedStartDate.toISOString(),
          birthdate: selectedBirthdate.toISOString(),
          gender: values.gender,
          employee_code: values.employeeCode,
          cuil: values.cuil,
          address,
          rol,
          email: `${name[0] + lastname}@school.edu.ar`.toLowerCase(),
          salary: values.salary
        };

        createEmployee(employee)
          .then(() => {
            toast.success("The register was successfully!");
            setValues(initialValues);
            setSelectedStartDate(new Date());
            setSelectedBirthdate(new Date());
          })
          .catch(() => {
            toast.error("An error has ocurred while creating a employee!");
          });
        break;

      case "Holder":
        const holder = {
          name,
          last_name: lastname,
          phone,
          address,
          email: `${name[0] + lastname}@school.edu.ar`.toLowerCase()
        };

        createHolder(holder)
          .then(() => {
            toast.success("The register was successfully!");
            setValues(initialValues);
          })
          .catch(() => {
            toast.error("An error has ocurred while creating a holder!");
          });
        break;
      default:
        break;
    }
  };

  const handlerSearchHolder = () => {
    const filter = {
      field: "holders",
      type: "lastName",
      filter: values.holderlastname
    };

    addFilter(filter);
    setOpen(true);
  };

  const handlerClickServices = event => {
    setServicesChosen(event.target.value);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };

  const employeesType = ["Teacher", "Janitor", "Principal"];

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
            error={hasError}
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
            error={hasError}
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
            error={hasError}
            fullWidth
            onChange={handleChange("phone")}
            value={values.phone}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="address"
            name="address"
            label="Address"
            error={hasError}
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
                    error={hasError}
                    name="startDate"
                    value={selectedStartDate}
                    onChange={handleStartDateChange}
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
                error={hasError}
                fullWidth
                className={classes.input}
                onChange={handleChange("salary")}
                value={values.salary}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="adornment-amount">Employee Code</InputLabel>
              <Input
                required
                id="employeeCode"
                name="employeeCode"
                label="Employee Code"
                fullWidth
                className={classes.input}
                value={values.employeeCode}
                onChange={handleChange("employeeCode")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="adornment-amount">CUIL</InputLabel>
              <Input
                required
                id="cuil"
                name="cuil"
                label="cuil"
                fullWidth
                value={values.cuil}
                className={classes.input}
                onChange={handleChange("cuil")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Employee Type</InputLabel>
              <Select
                value={values.rol}
                className={classes.select}
                fullWidth
                error={hasError}
                onChange={handleChange("rol")}
              >
                {employeesType.map((type, index) => {
                  return (
                    <MenuItem key={index} value={type}>
                      {type}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    label="Birthdate"
                    name="birthdate"
                    value={selectedBirthdate}
                    onChange={handleBirthdateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                    fullWidth
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                id="gender"
                value={values.gender}
                onChange={handleChange("gender")}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
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
                required
                error={hasError}
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
                error={hasError}
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
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="services-select">Services*</InputLabel>
              <Select
                multiple
                value={servicesChosen}
                fullWidth
                name="services-select"
                onChange={handlerClickServices}
                required
                error={hasError}
                input={<Input id="select-multiple-checkbox" />}
                renderValue={selected => selected.map(s => s.name).join(", ")}
                MenuProps={MenuProps}
              >
                {services.map((service, index) => {
                  return (
                    <MenuItem key={index} value={service}>
                      <Checkbox
                        checked={servicesChosen.some(s => s.id === service.id)}
                      />
                      <ListItemText primary={service.name} />
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
          handleAccept={handleAccept}
        />
      </Grid>
      <Grid item xs={12} sm={6} className={classes.grid}>
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
