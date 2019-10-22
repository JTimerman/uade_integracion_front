import React, { useEffect, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import useStyles from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import Dialog from "../Dialog/Dialog";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import DateFnsUtils from "@date-io/date-fns";
import { useTheme } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

const RegisterForm = props => {
  const [values, setValues] = React.useState({});
  const [parents, setParents] = React.useState([]);
  const [open, setOpen] = React.useState(true);
  const [selectedDate, setSelectedDate] = React.useState();
  const [servicesChosen, setServicesChosen] = React.useState([]);
  const [servicesList, setServicesList] = React.useState([]);
  const ScholarshipType = ["Doble Turno", "Medio Turno"];
  const classes = useStyles();

  const theme = useTheme();

  useEffect(() => {
    if (path === "/registerStudent") {
      setValues({ ...values, rol: "Student" });
    }
    if (path === "/registerEmployee") {
      setValues({ ...values, rol: "Employee" });
    } else {
      setValues({ ...values, rol: "Holder" });
    }
  }, []);

  useEffect(() => {
    setServicesList([
      {
        name: "English Class"
      },
      {
        name: "Portuguese Class"
      }
    ]);
  }, []);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlerAccept = event => {
    setValues({ ...values, parentId: event.currentTarget.name });
  };

  const handlerClickRegister = event => {
    event.preventDefault();
  };

  const path = props.location.pathname;

  const handlerSearchParent = event => {
    setOpen(true);
    setParents([
      {
        name: "Juan",
        lastName: "Perez",
        address: "lima 778",
        parentId: "1"
      },
      {
        name: "Ana",
        lastName: "Gomez",
        address: "test 123",
        parentId: "2"
      }
    ]);
  };

  const handlerClickServices = event => {
    //setServicesChosen(event.currentTarget.value)
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

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Register User
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lastname"
            onChange={handleChange("lastname")}
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="address" name="address" label="Address" fullWidth />
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
                label="Parent"
                fullWidth
                placeholder="search by id"
                InputProps={{
                  startAdornment: (
                    <IconButton
                      color="secondary"
                      className={classes.button}
                      onClick={handlerSearchParent}
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
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="select-multiple">Services</InputLabel>
              <Select
                multiple
                value={servicesChosen}
                fullWidth
                input={<Input id="select-multiple-checkbox" />}
                renderValue={selected => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {servicesList.map((service, index) => {
                  return (
                    <MenuItem key={index}>
                      <Checkbox
                        onClick={handlerClickServices}
                        name={service.name}
                      />
                      {service.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
          </Fragment>
        )}

        {parents.length != 0 ? (
          <Dialog
            parents={parents}
            handleClose={handleClose}
            open={open}
            handlerAccept={handlerAccept}
          />
        ) : (
          ""
        )}
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={handlerClickRegister}
        >
          Send
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default RegisterForm;
