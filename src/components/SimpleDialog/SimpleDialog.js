import React from "react";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import DialogContent from "@material-ui/core/DialogContent";
import useStyles from "./styles";

const emails = [
  "Juan Perez",
  "Emilia Perez",
  "Pepito pereeeeeeeeeeeez",
  "El test nuevo",
  "Juan Perez",
  "Juan Perez",
  "Juan Perez",
  "Juan Perez"
];

const SimpleDialog = props => {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="simple-dialog-title">
        You can choose a Employee
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <List>
          {emails.map(email => (
            <ListItem
              button
              onClick={() => handleListItemClick(email)}
              key={email}
              className={classes.items}
            >
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default SimpleDialog;
