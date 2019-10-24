import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";
import TablePagination from "@material-ui/core/TablePagination";
import MaterialTable from "material-table";
const columns = [
  { id: "firstName", label: "First name", minWidth: 170 },
  { id: "lastName", label: "Last name", minWidth: 100 },
  { id: "phone", label: "Phone number", minWidth: 100 },
  { id: "address", label: "Address", minWidth: 100 },
  { id: "rol", label: "Rol", minWidth: 100 },
  { id: "email", label: "E-mail", minWidth: 100 }
];

function createData(firstName, lastName, phone, address, rol, email) {
  return { firstName, lastName, phone, address, rol, email };
}

const rows = [createData(), createData()];

const UsersList = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <MaterialTable title="Users" columns={state.columns} data={state.data} />
    </Paper>
  );
};
export default withStyles()(UsersList);
