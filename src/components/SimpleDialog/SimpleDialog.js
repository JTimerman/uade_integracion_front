import React from "react";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import useStyles from "./styles";

const SimpleDialog = props => {
  const classes = useStyles();
  const { onClose, selectedValue, open, employees } = props;

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
    >
      <DialogTitle id="simple-dialog-title">
        You can choose a employee
      </DialogTitle>
      <List>
        {employees.map(employee => (
          <ListItem
            button
            onClick={() => handleListItemClick(employee.id)}
            key={employee.id}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`${employee.name} ${employee.last_name}`} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default SimpleDialog;
