import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";

import MaterialTable from "material-table";

const UsersList = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    columns: [
      { title: "First name", field: "firstName" },
      { title: "Last name", field: "lastName" },
      { title: "Phone number", field: "phone", type: "numeric" },
      {
        title: "Address",
        field: "address"
      },
      {
        title: "Rol",
        field: "rol"
      },
      {
        title: "Email",
        field: "email"
      }
    ],
    data: [
      {
        firstName: "Pablo",
        lastName: "Baran",
        phone: 198666677,
        address: "lima 667",
        rol: "Teacher",
        email: "pbaran@school.edu.ar"
      },
      {
        firstName: "Zerya",
        lastName: "Baran",
        phone: 202294683917,
        address: "Catamarca 566",
        rol: "Teacher",
        email: "zbaran@school.edu.ar"
      }
    ]
  });

  return (
    <Paper className={classes.root}>
      <MaterialTable title="Users" columns={state.columns} data={state.data} />
    </Paper>
  );
};
export default withStyles()(UsersList);
