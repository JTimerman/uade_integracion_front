import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import useStyles from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import Dialog from "../Dialog/Dialog";

const RegisterForm = props => {
  const [values, setValues] = React.useState({});
  const [parents, setParents] = React.useState([]);
  const [open, setOpen] = React.useState(true);

  const classes = useStyles();

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const path = props.location.pathname;

  const handlerSearchParent = event => {
    setOpen(true);
    setParents([
      {
        name: "Juan",
        lastName: "Perez",
        parentId: "156974",
        address: "lima 778"
      }
    ]);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Register user
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="address" name="address" label="Address" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          {path === "/registerStudent" && (
            <div>
              {" "}
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
            </div>
          )}

          {parents.length != 0 ? (
            <Dialog parents={parents} handleClose={handleClose} open={open} />
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default RegisterForm;
