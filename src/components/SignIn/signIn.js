import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Grid from "@material-ui/core/Grid";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import useStyles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const SignIn = props => {
  const classes = useStyles();
  const [values, setValues] = React.useState({});
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClick = event => {
    setLoading(true);
    event.preventDefault();
    const { username, password } = values;

    props
      .authenticateUser(username, password)
      .then(() => {
        props.history.push("/");
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          {loading ? (
            <div className={classes.loader}>
              <CircularProgress />
            </div>
          ) : (
            <>
              <TextField
                error={error}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="email"
                autoFocus
                onChange={handleChange("username")}
              />
              <TextField
                error={error}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange("password")}
              />
              {error && (
                <p className={classes.p}>
                  {"Username or Password is incorrect!"}
                </p>
              )}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
            disabled={loading}
          >
            Sign In
          </Button>
          <Grid container></Grid>
        </form>
      </div>
    </Container>
  );
};
const styledComponent = withStyles(useStyles)(SignIn);

export default withRouter(styledComponent);
