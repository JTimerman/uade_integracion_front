import React, { Fragment, useEffect } from "react";

import Button from "@material-ui/core/Button";
import DialogUI from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import useStyles from "./styles";
import IconButton from "@material-ui/core/IconButton";

export default function Dialog(props) {
  const classes = useStyles();

  const handlerAccept = () => {
    console.log("accept");
  };
  return (
    <div>
      <DialogUI
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            We' ve found that !
            {props.parents.map((parent, index) => {
              return (
                <Fragment key={index}>
                  <p>
                    Name : {parent.name} , LastName: {parent.lastName} , Parent
                    ID: {parent.parentId}, Address: {parent.address}{" "}
                  </p>
                  <IconButton
                    color="secondary"
                    className={classes.button}
                    onClick={handlerAccept}
                  >
                    <CheckCircleIcon />
                  </IconButton>
                </Fragment>
              );
            })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </DialogUI>
    </div>
  );
}
