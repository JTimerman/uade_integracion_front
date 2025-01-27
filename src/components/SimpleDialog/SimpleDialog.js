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

const SimpleDialog = ({ onClose, selectedValue, open, employees, classes }) => {
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
          {employees.map(employee => (
            <ListItem
              button
              onClick={() => handleListItemClick(employee.id)}
              key={employee.id}
              className={classes.items}
            >
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`${employee.name} ${employee.lastName}`} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default SimpleDialog;
