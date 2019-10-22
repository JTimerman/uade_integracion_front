import React, { Fragment } from "react";

import Button from "@material-ui/core/Button";
import DialogUI from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import useStyles from "./styles";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

export default function Dialog(props) {
  const classes = useStyles();

  return (
    <DialogUI
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
      <DialogContent>
        {props.parents.map((parent, index) => {
          return (
            <Fragment key={index}>
              <Grid item xs={12} className={classes.grid}>
                <p>
                  <span className={classes.fieldLabel}>Name:</span>
                  <span className={classes.fieldContent}>{parent.name}</span>
                  <span className={classes.fieldLabel}>Lastname:</span>
                  <span className={classes.fieldContent}>
                    {parent.lastName}
                  </span>
                  <span className={classes.fieldLabel}>Address:</span>
                  <span className={classes.fieldContent}>{parent.address}</span>
                </p>
                <IconButton
                  color="secondary"
                  className={classes.button}
                  name={parent.parentId}
                  onClick={props.handlerAccept}
                >
                  <CheckCircleIcon />
                </IconButton>
              </Grid>
            </Fragment>
          );
        })}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </DialogUI>
  );
}
