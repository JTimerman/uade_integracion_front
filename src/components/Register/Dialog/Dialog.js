import React, { Fragment } from "react";
import isEmpty from "lodash/isEmpty";

import Button from "@material-ui/core/Button";
import DialogUI from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

export default function Dialog({
  classes,
  holders,
  open,
  handleClose,
  handleAccept
}) {
  if (isEmpty(holders)) return null;

  return (
    <DialogUI
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
      <DialogContent>
        {holders.map((holder, index) => {
          return (
            <Fragment key={index}>
              <Grid item xs={12} className={classes.grid}>
                <p>
                  <span className={classes.fieldLabel}>Name:</span>
                  <span className={classes.fieldContent}>{holder.name}</span>
                  <span className={classes.fieldLabel}>Lastname:</span>
                  <span className={classes.fieldContent}>
                    {holder.lastName}
                  </span>
                  <span className={classes.fieldLabel}>Address:</span>
                  <span className={classes.fieldContent}>{holder.address}</span>
                </p>
                <IconButton
                  color="secondary"
                  className={classes.button}
                  holderlastname={holder.lastName}
                  holderid={holder.holderid}
                  onClick={handleAccept}
                >
                  <CheckCircleIcon />
                </IconButton>
              </Grid>
            </Fragment>
          );
        })}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </DialogUI>
  );
}
